import React, { useContext } from "react";
import styles from "./Component.module.css";
import {motion}  from "framer-motion"
import { slideFade } from "../../../JS_Scrips/Animate";
import { AppContext } from "../../../App";


function Hero({time,delay}) {
  let {isActive} =useContext(AppContext)

  return (
    <motion.div {...slideFade(time,isActive,delay)} className={styles.hero}>
      <h1 className={styles.heading}>Next-Gen AI Platform</h1>
      <p className={styles.subheading}>
        Control, speed, and accuracy — built for the future.
      </p>
    </motion.div>
  );
}


function FeatureCard({ title, desc, time , delay }) {
  let {isActive} =useContext(AppContext)

    return (
      <motion.div {...slideFade(time,isActive,delay)} className={styles.card}>
        <h3>{title}</h3>
        <p>{desc}</p>
      </motion.div>
    );
  
}

function CTAButton({ text,time ,delay }) {
  let {isActive} =useContext(AppContext)
  return <motion.button  {...slideFade(time,isActive,delay)} className={styles.button}>{text}</motion.button>;
}


export {Hero,CTAButton,FeatureCard}