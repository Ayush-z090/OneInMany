import React, { createContext, useContext, useState } from "react";
import { AppContext } from "../../App";
import RestaurantTreeHandlelr from "../../ComponentHandler/tree/Restaurant_tree";
import { delayTimer } from "../../JS_Scrips/Animate";
import NearbyRes from "./Component/NearByRes";
import { motion } from "framer-motion";


let RestaurantContext = createContext()

export default function RestaurantPage() {

  let {ArrChildID,isActive} = useContext(AppContext);
  let [time,setTime] = useState(3)
  let [is_E1,is_E2,is_E3,is_E4] = [ArrChildID?.includes("S_E1"),ArrChildID?.includes("S_E2"),ArrChildID?.includes("S_E3"),ArrChildID?.includes("S_E4")];
  let [delayArr,setDelayArr] = useState(delayTimer([is_E1,is_E2,is_E3,is_E4]))

    return (
    <>
    <RestaurantContext.Provider value={{delayArr,time}}>
      <motion.div 
      initial={{backgroundColor:"#19675a"}}
      animate={
        {backgroundColor:isActive ? "#19675a" : "#ffcc0000",
        transition:{duration:1,delay:1.5}}}
      style={{
        paddingTop:"1rem",
        backgroundColor:"var(--color-Res-primary)",
        width:"100vw",
        height:"100dvh",
        overflow:"auto"
      }}
      >
        {is_E1 ? <RestaurantTreeHandlelr Child_partID={"S_E1"}/> : ""}

        {is_E4 ? <NearbyRes/> : ""}

        {is_E2 && !is_E4 ? <RestaurantTreeHandlelr Child_partID={"S_E2"}/> : ""}

        {is_E3 && !is_E4? <RestaurantTreeHandlelr Child_partID={"S_E3"}/> : ""}

      </motion.div>
      </RestaurantContext.Provider>
    </>
  );
}

export {RestaurantContext}