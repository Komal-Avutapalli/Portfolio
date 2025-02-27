import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Komal</h1>
        <p className={styles.description}>
          I'm a full-stack developer using React and NodeJS. Reach out if you'd like to learn more or contact me for projects!
        </p>
        <a href="mailto:komalavutapalli@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src="/assets/hero/heroImage.png" // Directly reference the image from public folder
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
