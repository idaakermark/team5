import React from 'react';
import styles from './main.module.css';
import useSWR from 'swr';
import { getComments, commentsCacheKey } from '../../api/comments.js';

export default function Main() {
  //GET all comments
  const { data: { data = [] } = {} } = useSWR(commentsCacheKey, getComments);
  console.log(data);

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
