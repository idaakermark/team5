import styles from "./header.module.css";
import logo from '../../image/logo4_theNeverendingCommentPage.svg';

export default function Header() {
   
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo" className={styles.logo}/>
        </div>        
      </div>
    </>
  );
}
