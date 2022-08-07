import React from "react";
import vk from "../../img/vk.png";
import inst from "../../img/inst.png";
import tg from "../../img/tg.png";
import styles from "./Contacts.module.css";
function Contacts() {
  return (
    <div className={styles.pageWrapper}>
      <h1 id="contacts">Contacts</h1>
      <p className={styles.text}>
        Want to know more or just chat? You are welcome!
      </p>
      <button className={styles.sendMessage}>Send message</button>
      <div className={styles.iconWrapper}>
        <a href="https://vk.com/abcads">
          <img className={styles.vk} src={vk}></img>
        </a>
        <a href="https://www.instagram.com/noway__">
          <img className={styles.inst} src={inst}></img>
        </a>
        <a href="https://t.me/flipppppppppp">
          <img className={styles.tg} src={tg}></img>
        </a>
      </div>
      <div className={styles.footer}>Here is my vk, inst and tg profiles.</div>
    </div>
  );
}

export default Contacts;
