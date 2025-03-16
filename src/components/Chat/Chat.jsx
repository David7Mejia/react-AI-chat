import React, { useEffect, useRef, useMemo } from "react";
import styles from "./Chat.module.css";
import ReactMarkdown from "react-markdown";

const WELCOME_MESSAGE_GROUP = [
  {
    role: "assistant",
    content: "Hello! I'm Chatbot. How can I help you today?",
    // className: "WelcomeMessage",
  },
];

const Chat = ({ messages }) => {
  const messageEndRef = useRef(null);
  // calc value of messageGroups using useMemo to group messages by role (assistant or user) only when messages change
  const messageGroups = useMemo(
    () =>
      messages.reduce((groups, message) => {
        if (message.role === "user") groups.push([]);
        groups[groups.length - 1].push(message);
        return groups;
      }, []),

    [messages]
  );

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className={styles.Chat}>
      {[WELCOME_MESSAGE_GROUP, ...messageGroups].map(
        (messages, groupIndex) => (
          //? GROUP
          <div key={groupIndex} className={styles.Group}>
            {messages.map(({ role, content }, messageIndex) => (
              //? MESSAGE
              <div key={messageIndex} className={styles.Message} data-role={role}>
                <ReactMarkdown>{content}</ReactMarkdown>
                {/* {role === "assistant" ? <ReactMarkdown>{content}</ReactMarkdown> : content} */}
              </div>
            ))}
          </div>
        )

        // {[WELCOME_MESSAGE_GROUP, ...messages].map(({ role, content }, i) => (
        // ))}
      )}
      <div className="end-ref" ref={messageEndRef}></div>
    </div>
  );
};
export default Chat;
