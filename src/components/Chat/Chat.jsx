import React from "react";
import styles from "./Chat.module.css";

const Chat = ({ messages }) => {
  const welcomeMessage = {
    role: "assistant",
    content: "Hello! I'm Chatbot. How can I help you today?",
  };

  return (
    <div className={styles.Chat}>
      {[welcomeMessage, ...messages].map(({ role, content }, i) => (
        <div key={i} className={styles.Message} data-role={role}>
          {content}
        </div>
      ))}
    </div>
  );
};

export default Chat;
