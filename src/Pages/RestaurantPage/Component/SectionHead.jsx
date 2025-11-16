import React, { useContext } from "react";
import Box from "@mui/material/Box";
import  Button  from "@mui/material/Button";
import styles from "./Component.module.css";
import Vec_Img from "../../../assets/Res_Vec_img.png";
import Vector_img_01 from "../../../assets/vec_img_01.png";
import { AppContext } from "../../../App";
import { RestaurantContext } from "../RestaurantPage";
import { AnimatePresence, motion } from "framer-motion";
import { slideFade } from "../../../JS_Scrips/Animate";

const SectionHead = () => {
  
  let {isWidthLimit} = useContext(AppContext);
  let {time,delayArr,is_E2} = useContext(RestaurantContext);


  return (
    <AnimatePresence>
    <Box
    key={"comp_2"}
    layout
    component={motion.div}

    style={isWidthLimit ? 
      {
        height:"52%"
      } : {}}

    {...slideFade(time,is_E2,delayArr[1])}
    className={styles.bodySec}>
      <div
      style={isWidthLimit ? 
        {
          width:"100%",
          position:"relative",
          zIndex:"2",
          textShadow:"1px 4px 20px black"

        }: {}}
       className={styles.left}>
        {isWidthLimit ? 
        <img
        style={
          {
            top: 0,
            left: 0,
            objectFit: "cover",
            width: "100%",
            height: "100%",
            zIndex:-1,
            filter: "blur(1px) brightness(0.8)",
            position:"absolute",
          }}
        className={styles.BgVEc} src={Vec_Img} alt="" />
 : ""}
          <h1
          style={isWidthLimit ? {fontSize:"3rem"}: {}}
          >Taste Around You
          <img className={styles.Vec_Img} src={Vector_img_01} alt="" />

          </h1>
          <h4 style={isWidthLimit ? {fontSize :"1.4rem"} : {}}>
            Savor The most Delicious Bites Around You
          </h4>
          <Button
          style={ isWidthLimit ? 
            {
              fontSize : "1rem"
            } : {}}
          > Search Now</Button>
      </div>
      {isWidthLimit ? "" : <IMG_ />}
    </Box>
    </AnimatePresence>
  );
};

let IMG_=({sty})=>{
  return (<div
  style={sty ? sty : {}}
  className={styles.right}>
    <img className={styles.BgVEc} src={Vec_Img} alt="" />
</div>)
}

export default SectionHead;
