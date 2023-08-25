import { useRef } from "react";
import styles from "./add-comment.module.css";
import useSWRMutation from "swr/mutation";
import { addComment, commentsCacheKey } from '../../../../api/comments.js';
import { useState } from "react";

export default function AddComment({ onAddComment })  {
  const formRef = useRef();
  const [isFormHidden, setIsFormHidden] = useState(true); 

  const { trigger: addTrigger } = useSWRMutation(commentsCacheKey, addComment);

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { alias, comment } = Object.fromEntries(formData);
    const commentData = {
      alias,
      comment,
    };
    const { error, data } = await addTrigger(commentData);

    if (!error) {
      formRef.current.reset();
      setIsFormHidden(true);
      console.log(commentData);

      if (data && data.id) {
        onAddComment(data.id);
      }
    }
  };

  const toggleFormVisibility = () => {
    setIsFormHidden(!isFormHidden);
  };

  return (
    <div className={styles.commentFrame}>
        {isFormHidden ? (
          <button className={styles.addCommentButton} onClick={toggleFormVisibility}>
            Add a comment
          </button>
        ) : (
          <div className={styles.commentContainer}>
          <form ref={formRef} className={styles.form} onSubmit={handleOnSubmit}>
            <div className={styles.inputContainer}>
              <h5 htmlFor="alias">Author</h5>
              <input id="alias" name="alias"></input>
            </div>

            <div className={styles.inputContainer}>
              <h5 htmlFor="comment">Comment</h5>
              <textarea id="comment" name="comment"></textarea>
            </div>

            <button className={styles.button} type="submit">
              Submit
            </button>
            <button className={styles.closeForm} onClick={toggleFormVisibility}>
              close
            </button>
          </form>
          </div>
        )}

    </div>
  );
}
