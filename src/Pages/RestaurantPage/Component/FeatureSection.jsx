import React, { useContext } from "react";
import Card from "@mui/material/Card";
import styles from "./Component.module.css";
import Typography from "@mui/material/Typography";
import { AppContext } from "../../../App";
import { RestaurantContext } from "../RestaurantPage";
import { AnimatePresence, motion } from "framer-motion";
import { slideFade } from "../../../JS_Scrips/Animate";

const features = [
  {
    id:1,
    title: "Fast Nearby Results",
    desc: "Quickly find top-rated restaurants near your location in seconds.",
  },
  {
    id:2,
    title: "Trusted Reviews",
    desc: "See verified ratings and reviews from real customers.",
  },
  {
    id:3,
    title: "Smart Recommendations",
    desc: "AI-powered suggestions based on your taste and favorites.",
  },
];

const FeaturesSection = () => {
  let {time,delayArr,is_E3} = useContext(RestaurantContext)
  
  return (
    <>
    <AnimatePresence>
      <motion.div 
          key={"comp_3"}
          layout      
      {...slideFade(time,is_E3,delayArr[2])}
      className={styles.features}>
        {features.map(data=>
          <Card
          className={styles.Card_ele}
          key={data.id}>
            <Typography
            className={styles._h3}
            key={`T1_${data.id}`}
            component={"div"}
            variant="h3"
            >{data.title}</Typography>
            <Typography 
            key={`T2_${data.id}`}
            component={'div'}
            className={styles._p}
            variant="p">
              {data.desc}
            </Typography>
          </Card>
        )}
      </motion.div>
      </AnimatePresence>
    </>
  );
};


export default FeaturesSection;
