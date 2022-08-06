import React from "react";
import styles from "./AboutMe.module.css";
function AboutMe() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.head}>About me</h1>
      <p className={styles.description}>
        Hi, I'm Denis – UX/UI designer from Minsk. I'm interested in design and
        everything connected with it.
      </p>
      <p className={styles.description}>
        I'm studying at courses "Web and mobile design interfaces" in
        IT-Academy.
      </p>
      <p className={styles.description}>
        Ready to implement excellent projects with wonderful people.
      </p>
    </div>
  );
}

export default AboutMe;
