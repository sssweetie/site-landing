import React from "react";
import styles from "./Portfolio.module.css";
import Carousel from "../Carousel/Carousel";
import item1 from "../../img/psyscan/1.jpg";
import item2 from "../../img/psyscan/2.jpg";
import item3 from "../../img/psyscan/3.jpg";
import item4 from "../../img/psyscan/4.jpg";
import item5 from "../../img/psyscan/5.jpg";

function Portfolio() {
  return (
    <div id="portfolio" className={styles.wrapper}>
      <h1 className={styles.head}>Portfolio</h1>
      <Carousel>
        <img src={item1} className={styles.item}></img>
        <img src={item2} className={styles.item}></img>
        <img src={item3} className={styles.item}></img>
        <img src={item4} className={styles.item}></img>
        <img src={item5} className={styles.item}></img>
      </Carousel>
    </div>
  );
}

export default Portfolio;
