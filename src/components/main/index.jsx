import React from "react";
import styles from "./main.module.css";

export default function Main() {

  const author = "Jane Doe"
  const date = "Agust 22, 2023 at 14:35"
  const comments = [
    "Wow, this website's design is incredibly user-friendly and visually appealing. Kudos to the designers!",
    "I'm impressed with how easy it is to navigate this site. Great job!",
    "The color scheme here is fantastic, it really adds to the overall experience.",
    "I love the attention to detail in the layout. It's clear that a lot of thought went into it.",
    "This website sets a high bar for usability. Well done!",
    "I've seen a lot of websites, and this one stands out for all the right reasons.",
    "The design is so clean and intuitive. It makes browsing a pleasure.",
    "The designers nailed it! This site is a joy to use.",
    "I wish more websites were as well-designed as this one.",
    "I can't stop admiring how polished and user-friendly this website is."
  ];

  return (
    <div className={styles.mainContent}>
      <div className={styles.commentContainer}>
      <h1 className={styles.rubrik}>Comments</h1>
        {/* Example comment content */}
        {comments.map((comment, index) => (
          <div key={index} className={styles.comment}>
            <h6># {index + 1}</h6>
            <p>{comment}</p>
            <div className={styles.authorContainer}> Author:
              <span className={styles.author}> {author}</span>
              <span className={styles.date}> {date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

