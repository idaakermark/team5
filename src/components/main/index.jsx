import React from "react";
import styles from "./main.module.css";

export default function Main() {
  return (
    <div className={styles.mainContent}>
      <div className={styles.commentContainer}>
        {/* Example comment content */}
        {Array.from({ length: 50 }, (_, index) => (
          <div key={index} className={styles.comment}>
            Comment {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

