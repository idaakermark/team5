import useSWR from 'swr';
import { getComments, commentsCacheKey } from '../../api/comments.js';

export default function Comments() {
  //GET all comments
  const { data: { data = [] } = {} } = useSWR(commentsCacheKey, getComments);
  console.log(data);
  console.log(data[0]); //One comment object
	//oldest to newest comment in response 

  return (
    <div key={comment.id} className={styles.comment}>
      <h6># {index + 1}</h6>
      <p>{comment}</p>
      <div className={styles.authorContainer}>
        {' '}
        Author:
        <span className={styles.author}> {author}</span>
        <span className={styles.date}> {date}</span>
      </div>
    </div>
  );
}
