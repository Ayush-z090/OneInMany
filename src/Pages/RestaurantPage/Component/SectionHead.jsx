import React, { useContext } from "react";
import Box from "@mui/material/Box";
import  Button  from "@mui/material/Button";
import styles from "./Component.module.css";
import Vec_Img from "../../../assets/Res_Vec_img.png";
import Vector_img_01 from "../../../assets/vec_img_01.png";
import { AppContext } from "../../../App";
import { RestaurantContext } from "../RestaurantPage";
import { motion } from "framer-motion";
import { slideFade } from "../../../JS_Scrips/Animate";

const SectionHead = () => {
  
  let {isActive} = useContext(AppContext)
  let {time,delayArr} = useContext(RestaurantContext)


  return (
    <Box
    component={motion.div}
    {...slideFade(time,isActive,delayArr[1])}
    className={styles.bodySec}>
      <div className={styles.left}>
          <h1>Taste Around You
          <img className={styles.Vec_Img} src={Vector_img_01} alt="" />

          </h1>
          <h4>
            Savor The most Delicious Bites Around You
          </h4>
          <Button> Search Now</Button>
      </div>
      <div className={styles.right}>
            <img className={styles.BgVEc} src={Vec_Img} alt="" />
      </div>
    </Box>
  );
};

export default SectionHead;
