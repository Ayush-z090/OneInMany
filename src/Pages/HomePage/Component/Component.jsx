import React, { useContext } from "react";
import styles from "./Component.module.css";
import {AnimatePresence, motion}  from "framer-motion"
import { slideFade } from "../../../JS_Scrips/Animate";
import { AppContext } from "../../../App";
import { HomepageContext } from "../Homepage";


function Hero() {

  let {isActive} = useContext(AppContext)
  let {time,delayArr,is_E1} = useContext(HomepageContext)

  return (
    <AnimatePresence>
    <motion.div 
    key={"comp_1"}
    layout
    {...slideFade(time,is_E1 && isActive,delayArr[0])} className={styles.hero}>
      <h1 className={styles.heading}>Next-Gen AI Platform</h1>
      <p className={styles.subheading}>
        Control, speed, and accuracy — built for the future.
      </p>
    </motion.div>
    </AnimatePresence>

  );
}


function FeatureCard({ title, desc }) {

  let {isActive} = useContext(AppContext)

  let {time,delayArr,is_E2} = useContext(HomepageContext)

    return (
      <AnimatePresence>
      <motion.div
      layout
      key={"comp_2"}
      {...slideFade(time,is_E2 &&  isActive ,delayArr[1])} className={styles.card}>
        <h3>{title}</h3>
        <p>{desc}</p>
      </motion.div>
      </AnimatePresence>

    );
  
}

function CTAButton({ text }) {

  let {time,delayArr,setAI_But,is_E3} = useContext(HomepageContext)
  let {isActive} = useContext(AppContext)

  return <>
  <AnimatePresence>
  <motion.button
      key={"comp_3"}

    layout
    {...slideFade(time,is_E3 &&  isActive,delayArr[2])} 
    className={styles.button}
    onClick={()=> setAI_But(true)}
    >{text}</motion.button>;
    </AnimatePresence>
    </>
}


export {Hero,CTAButton,FeatureCard}
