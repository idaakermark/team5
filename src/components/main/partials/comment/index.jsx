import styles from '../../main.module.css';
import { useState, useEffect } from 'react';

export default function Comment({
  id,
  created_at,
  alias,
  comment,
  index,
  dataLenght,
  isNewComment,
}) {

  const [showNewCommentClass, setShowNewCommentClass] = useState(isNewComment);

  useEffect(() => {
    if (isNewComment) {
      const timer = setTimeout(() => {
        setShowNewCommentClass(false);
      }, 2500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isNewComment]);

  return (
    <div
      key={id}
      className={`${styles.comment} ${showNewCommentClass ? styles.newComment : ''}`}>
      <h6># {dataLenght - index}</h6>
      <p>{comment}</p>
      <div className={styles.authorContainer}>
        Author:
        <span className={styles.author}> {alias}</span>
        <span className={styles.date}> {created_at}</span>
      </div>
    </div>
  );
}
