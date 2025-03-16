import React, { useState, useRef, useEffect } from "react";
import styles from "./Controls.module.css";
import TextareaAutosize from "react-textarea-autosize";

const Controls = ({ isDisabled = false, onSend }) => {
  const [content, setContent] = useState("");
  const textAreaRef = useRef(null);
  const handleContentChange = e => {
    setContent(e.target?.value);
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

  useEffect(() => {
    if (!isDisabled) {
      textAreaRef.current.focus();
    }
  }, [isDisabled]);

  return (
    <div className={styles.Controls}>
      <div className={styles.TextAreaContainer}>
        <TextareaAutosize
          className={styles.TextArea}
          placeholder="Message AI"
          value={content}
          disabled={isDisabled}
          onChange={handleContentChange}
          onKeyDown={handleKeyDown}
          minRows={2}
          maxRows={20}
          ref={textAreaRef}
        />
      </div>
      <button disabled={isDisabled} className={styles.Button} onClick={handleContentSend}>
        <div className={styles.SVG}></div>
      </button>
    </div>
  );
};

export default Controls;
