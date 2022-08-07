import React from "react";
import styles from "./AboutMe.module.css";
function AboutMe() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.head}>About me</h1>
      <p className={styles.description}>
        Hi, I'm Aleksandr - Frontend developer from Volgograd. I'm interested in
        web-design and everything connected with it.
      </p>
      <p className={styles.description}>
        I'm studying at VSTU at courses "Computer-aided design of cyber-physical
        systems" in the 4th year.
      </p>
      <p className={styles.description}>
        I passed an internship in Belgium for 3 months. We made a special
        schedule for people with disabilities. It helped them to communicate
        with their tutors purely. I learned some basics of react-redux and
        design also.
      </p>
      <p className={styles.description}>
        Moreover, I passed an internship in Volgograd company "OOO ANT GRUP" for
        1 month. We supposed to create basic mobile app on react-native. I
        studied how to work with expo and react-native as well.
      </p>
      <p className={styles.description}>
        Ready to implement projects and try my own skills with wonderful people
        :)
      </p>
    </div>
  );
}

export default AboutMe;
