import React from "react";
import styles from "./WelcomePage.module.css";
import gradient from "../../img/me wide.jpg";
import menu from "../../img/menu.png";
function WelcomePage() {
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
      <div className={styles.header320}>
        <a className={styles.headerTags}>Home</a>
        <img className={styles.menu} src={menu}></img>
      </div>
      <hr></hr>
      <div className={styles.main}>
        <b className={styles.fullName}>Aleksandr Tokarev</b>
        <p className={styles.description}>
          Frontend developer on React-Redux, 20 y.o, Volgograd
        </p>
        <p className={styles.language}>RU | ENG</p>
      </div>
      <img className={styles.gradient} src={gradient}></img>
    </div>
  );
}

export default WelcomePage;
