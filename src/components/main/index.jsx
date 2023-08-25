import React from 'react';
import styles from './main.module.css';
import useSWR from 'swr';
import { getComments, commentsCacheKey } from '../../api/comments.js';
import Comment from './partials/comment/index.jsx';
import AddComment from "./partials/add-comment";
import MockData from './mockData/mockData';
import mockData from './mockData/mockData';

export default function Main() {
  //GET all comments
  const { data: { data = [] } = {} } = useSWR(commentsCacheKey, getComments);
  console.log(data);
  let dataLenght = data.length;

  return (
    <div className={styles.mainContent}>
      <AddComment />
      <div className={styles.commentContainer}>
        {data.length === 0 && <MockData/>} 
        {data?.map((comment, index) => (
          <Comment
            key={comment.id}
            index={index + 1} 
            dataLenght={dataLenght + 1}
            {...comment}
          />
        ))}
      </div>
    </div>
  );
}
