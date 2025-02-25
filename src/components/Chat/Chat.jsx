import React from "react";
import styles from "./Chat.module.css";

const Chat = ({ messages }) => {
  return (
    <div className={styles.Chat}>
      {messages.map(({ role, content }, i) => (
        <div key={i} className={styles.Message} data-role={role}>
          {content}
        </div>
      ))}
    </div>
  );
};

export default Chat;
