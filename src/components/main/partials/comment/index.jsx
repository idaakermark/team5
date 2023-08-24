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
        <span className={styles.author}>{alias} </span>
        <time className={styles.date}>
          {new Date(created_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: false,
          })}
        </time>
      </div>
    </div>
  );
}

