export default function Comment({ id, created_at, alias, comment }) {

  return (
    <div key={comment.id} className={styles.comment}>
      <h6># {index + 1}</h6>
      <p>{comment}</p>
      <div className={styles.authorContainer}>
        Author:
        <span className={styles.author}> {author}</span>
        <span className={styles.date}> {date}</span>
      </div>
    </div>
  );
}
