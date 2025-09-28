import React from "react";
import styles from "./Component.module.css";


function Hero() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.heading}>Next-Gen AI Platform</h1>
      <p className={styles.subheading}>
        Control, speed, and accuracy — built for the future.
      </p>
    </div>
  );
}


function FeatureCard({ title, desc }) {
    return (
      <div className={styles.card}>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    );
  
}


function CTAButton({ text }) {
  return <button className={styles.button}>{text}</button>;
}


export {Hero,CTAButton,FeatureCard}