import React from "react";
import styles from "./Skills.module.css";
import star3 from "../../img/3star.png";
import star4 from "../../img/4star.png";
import react from "../../img/react.png";
import redux from "../../img/redux.png";
import figma from "../../img/figma.png";
import adobe from "../../img/adobe.png";

function Skills() {
  return (
    <div id="skills" className={styles.wrapper}>
      <h1 className={styles.title}>Skills</h1>
      <p className={styles.description}>
        I work with such frameworks & programs as:
      </p>
      <div className={styles.block}>
        <img src={react} className={styles.program}></img>
        <p className={styles.programName}>React</p>
        <img src={star4} className={styles.programSkill}></img>
      </div>
      <div className={styles.block}>
        <img src={redux} className={styles.program}></img>
        <p className={styles.programName}>Redux</p>
        <img src={star4} className={styles.programSkill}></img>
      </div>
      <div className={styles.block}>
        <img src={figma} className={styles.program}></img>
        <p className={styles.programName}>Figma</p>
        <img src={star3} className={styles.programSkill}></img>
      </div>
      <div className={styles.block}>
        <img src={adobe} className={styles.program}></img>
        <p className={styles.programName}>Adobe Photoshop</p>
        <img src={star3} className={styles.programSkill}></img>
      </div>
    </div>
  );
}

export default Skills;
