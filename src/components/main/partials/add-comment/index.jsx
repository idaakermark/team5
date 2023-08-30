import { useRef } from 'react';
import styles from './add-comment.module.css';
import useSWRMutation from 'swr/mutation';
import { addComment, commentsCacheKey } from '../../../../api/comments.js';
import { useState } from 'react';

export default function AddComment() {
  const formRef = useRef();
  const [isFormHidden, setIsFormHidden] = useState(true);

  const { trigger: addTrigger } = useSWRMutation(commentsCacheKey, addComment);

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { alias, comment } = Object.fromEntries(formData);

    if (!alias || !comment) {
      alert("Hold on a tick! We're missing a couple of puzzle pieces here: your nickname and your thoughts. Care to share?");
      return;
    }

    const commentData = {
      alias,
      comment,
    };
    const { error } = await addTrigger(commentData);

    if (!error) {
      formRef.current.reset();
      setIsFormHidden(true);
    }
  };

  const toggleFormVisibility = () => {
    setIsFormHidden(!isFormHidden);
  };

  return (
    <div className={styles.commentFrame}>
      {isFormHidden ? (
        <button
          className={styles.addCommentButton}
          onClick={toggleFormVisibility}
        >
          Add a comment
        </button>
      ) : (
        <div className={styles.commentContainer}>
          <form ref={formRef} className={styles.form} onSubmit={handleOnSubmit}>
            <div className={styles.inputContainer}>
              <h5 htmlFor='alias'>Author</h5>
              <input id='alias' name='alias'></input>
            </div>

            <div className={styles.inputContainer}>
              <h5 htmlFor='comment'>Comment</h5>
              <textarea id='comment' name='comment' maxlength='305'></textarea>
            </div>

            <button className={styles.button} type='submit'>
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
