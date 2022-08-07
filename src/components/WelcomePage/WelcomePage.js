import React, { useState } from "react";
import styles from "./WelcomePage.module.css";
import gradient from "../../img/me wide.jpg";
import menu from "../../img/menu.png";
import MenuPanel from "../MenuPanel/MenuPanel";

function WelcomePage() {
  const [menuVisibility, setMenuVisability] = useState(false);
  const [languageVisibility, setLanguageVisability] = useState(true);
  const Menu = () => (
    setMenuVisability(!menuVisibility),
    setLanguageVisability(!languageVisibility)
  );
  return (
    <div className={styles.page}>
      {menuVisibility ? <MenuPanel></MenuPanel> : null}
      <div id="welcomepage" className={styles.header}>
        <a className={styles.headerTags} href="#welcomepage">
          Home
        </a>
        <a className={styles.headerTags} href="#aboutme">
          About me
        </a>
        <a className={styles.headerTags} href="#skills">
          Skills
        </a>
        <a className={styles.headerTags} href="#portfolio">
          Portfolio
        </a>
        <a className={styles.headerTags} href="#contacts">
          Contacts
        </a>
      </div>
      <div className={styles.header320}>
        <a className={styles.headerTags}>Home</a>
        <img onClick={() => Menu()} className={styles.menu} src={menu}></img>
      </div>
      <hr></hr>
      <div className={styles.main}>
        <b className={styles.fullName}>Aleksandr Tokarev</b>
        <p className={styles.description}>
          Frontend developer on React-Redux, 20 y.o, Volgograd
        </p>
        {languageVisibility ? (
          <p className={styles.language}>RU | ENG</p>
        ) : null}
      </div>
      <img className={styles.gradient} src={gradient}></img>
    </div>
  );
}

export default WelcomePage;
