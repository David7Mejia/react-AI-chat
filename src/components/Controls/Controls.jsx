import React from "react";
import styles from "./Controls.module.css";

const Controls = () => {
  return (
    <div className={styles.Controls}>
      <div className={styles.TextAreaContainer}>
        <textarea className={styles.TextArea} placeholder="Message AI" />
      </div>
      <button className={styles.Button}>
        <div className={styles.SVG}></div>
      </button>
    </div>
  );
};

export default Controls;
