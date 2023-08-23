import styles from "./footer.module.css";
import logo from '../../image/logo4_theNeverendingCommentPage.svg';

export default function Footer() {
   
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.aboutContainer}>
            <h3>About</h3>
            <p className={styles.aboutText}>Welcome to the Never-Ending Comment Page, where conversations stretch to infinity. Join our community and be part of an endless exchange of ideas and perspectives.</p>
            <p className={styles.copyright}>© 2023 The Never-Ending Comment Page. All rights reserved.</p>
        </div>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo" className={styles.logo}/>
        </div>        
      </div>
    </>
  );
}