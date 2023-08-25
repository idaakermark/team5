import React from 'react';
import styles from './main.module.css';
import useSWR from 'swr';
import { getComments, commentsCacheKey } from '../../api/comments.js';
import Comment from './partials/comment/index.jsx';
import AddComment from "./partials/add-comment";
import { useState} from 'react';

export default function Main() {
  //GET all comments
  const { data: { data = [] } = {} } = useSWR(commentsCacheKey, getComments);
  console.log(data)
  let dataLenght = data.length

  const [newlyAddedComments, setNewlyAddedComments] = useState([]);

  const handleAddComment = (commentId) => {
    setNewlyAddedComments([...newlyAddedComments, commentId]);
  };

  return (
    <div className={styles.mainContent}>
      <AddComment onAddComment={handleAddComment} />
      <div className={styles.commentContainer}>
        <h3 className={styles.rubrik}>Comments</h3>
        {data.map((comment, index) => (
          <Comment
            key={comment.id}
            index={index + 1}
            dataLenght={dataLenght + 1}
            isNewComment={newlyAddedComments.includes(comment.id)}
            {...comment}
          />
        ))}
      </div>
    </div>
  );
}
