import React from "react";
import styles from "./MenuPanel.module.css";
function MenuPanel() {
  return (
    <div className={styles.menuPanel}>
      <a className={styles.points} href="#welcomepage">
        Home
      </a>
      <a className={styles.points} href="#aboutme">
        About me
      </a>
      <a className={styles.points} href="#skills">
        Skills
      </a>
      <a className={styles.points} href="#portfolio">
        Portfolio
      </a>
      <a className={styles.points} href="#contacts">
        Contacts
      </a>
    </div>
  );
}

export default MenuPanel;
