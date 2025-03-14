import React, { useState } from "react";
import styles from "./Controls.module.css";

const Controls = ({ onSend }) => {
  const [content, setContent] = useState("");

  const handleContentChange = e => {
    setContent(e.target.value);
  };

  const handleContentSend = () => {
    if (content.length > 0) {
      onSend(content);
      setContent("");
    }
  };

  const handleKeyDown = e => {
    // For ctrl + enter
    // if (e.key === 'Enter' && e.ctrlKey) {
    //   handleContentSend();
    //   e.preventDefault();
    //   handleContentChange()
    // }
    if (e.key === "Enter" && !e.shiftKey) {
      handleContentSend();
      e.preventDefault();
      handleContentChange();
    }
  };

  return (
    <div className={styles.Controls}>
      <div className={styles.TextAreaContainer}>
        <textarea className={styles.TextArea} placeholder="Message AI" value={content} onChange={handleContentChange} onKeyDown={handleKeyDown} />
      </div>
      <button className={styles.Button} onClick={handleContentSend}>
        <div className={styles.SVG}></div>
      </button>
    </div>
  );
};

export default Controls;
