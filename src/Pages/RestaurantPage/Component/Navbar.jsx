import React, { useContext } from "react";
import Box from "@mui/material/Box";
import styles from "./Component.module.css";
import { AppContext } from "../../../App";
import { RestaurantContext } from "../RestaurantPage";
import { AnimatePresence, motion } from "framer-motion";
import { slideFade } from "../../../JS_Scrips/Animate";


const Navbar = () => {

  let {isActive} = useContext(AppContext)
  let {time,delayArr,is_E1} = useContext(RestaurantContext)


  return (
    <>
    <AnimatePresence>
    <Box 
      key={"comp_1"}
      layout
    component={motion.div}
    {...slideFade(time,is_E1,delayArr[0])}
    className={styles.navbar}>
      <h1>Nert</h1>
    </Box>
    </AnimatePresence>
    </>
  );
};

export default Navbar;
