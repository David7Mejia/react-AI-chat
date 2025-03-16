import React, { useEffect, useRef } from "react";
import styles from "./Chat.module.css";
import ReactMarkdown from "react-markdown";

const welcomeMessage = {
  role: "assistant",
  content: "Hello! I'm Chatbot. How can I help you today?",
};

const Chat = ({ messages }) => {
  const messageEndRef = useRef(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className={styles.Chat}>
      {[welcomeMessage, ...messages].map(({ role, content }, i) => (
        <div key={i} className={styles.Message} data-role={role}>
          {role === "assistant" ? <ReactMarkdown>{content}</ReactMarkdown> : content}
        </div>
      ))}
      <div ref={messageEndRef}></div>
    </div>
  );
};

export default Chat;
