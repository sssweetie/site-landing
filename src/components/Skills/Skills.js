import React from "react";
import styles from "./Skills.module.css";
function Skills() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Skills</h1>
      <p className={styles.description}>
        I work with such frameworks&programs as:
      </p>
      <div className={styles.block}>
        <img className={styles.program}></img>
        <p className={styles.programName}>React</p>
        <img className={styles.programSkill}></img>
      </div>
      <div className={styles.block}>
        <img className={styles.program}></img>
        <p className={styles.programName}>Redux</p>
        <img className={styles.programSkill}></img>
      </div>
      <div className={styles.block}>
        <img className={styles.program}></img>
        <p className={styles.programName}>Figma</p>
        <img className={styles.programSkill}></img>
      </div>
      <div className={styles.block}>
        <img className={styles.program}></img>
        <p className={styles.programName}>Adobe Photoshop</p>
        <img className={styles.programSkill}></img>
      </div>
    </div>
  );
}

export default Skills;
