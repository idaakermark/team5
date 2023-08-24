import styles from '../../main.module.css';

export default function Comment({
  id,
  created_at,
  alias,
  comment,
  index,
  dataLenght,
}) {

  return (
    <div key={id} className={styles.comment}>
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
