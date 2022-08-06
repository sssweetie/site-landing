import styles from "./styles.module.css";
function App() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <a className={styles.headerTags} href="">
          Home
        </a>
        <a className={styles.headerTags} href="">
          About me
        </a>
        <a className={styles.headerTags} href="">
          Skills
        </a>
        <a className={styles.headerTags} href="">
          Portfolio
        </a>
        <a className={styles.headerTags} href="">
          Contacts
        </a>
      </div>
      <hr></hr>
      <div className={styles.main}>
        <b className={styles.fullName}>Aleksandr Tokarev</b>
      </div>
      <div></div>
    </div>
  );
}

export default App;
