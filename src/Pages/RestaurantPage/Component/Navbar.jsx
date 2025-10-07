import React, { useContext } from "react";
import Box from "@mui/material/Box";
import styles from "./Component.module.css";
import { AppContext } from "../../../App";
import { RestaurantContext } from "../RestaurantPage";
import { motion } from "framer-motion";
import { slideFade } from "../../../JS_Scrips/Animate";


const Navbar = () => {

  let {isActive} = useContext(AppContext)
  let {time,delayArr} = useContext(RestaurantContext)


  return (
    <>
    <Box 
    component={motion.div}
    {...slideFade(time,isActive,delayArr[0])}
    className={styles.navbar}>
      <h1>Nert</h1>
    </Box>
    </>
  );
};

export default Navbar;
