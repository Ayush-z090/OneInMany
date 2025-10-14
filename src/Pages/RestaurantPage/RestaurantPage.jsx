import React, { createContext, useContext, useState } from "react";
import { AppContext } from "../../App";
import RestaurantTreeHandlelr from "../../ComponentHandler/tree/Restaurant_tree";
import { bgFadeEffect, delayTimer } from "../../JS_Scrips/Animate";
import NearbyRes from "./Component/NearByRes";
import { AnimatePresence, motion } from "framer-motion";


let RestaurantContext = createContext()

export default function RestaurantPage() {

  let {ArrChildID,isActive} = useContext(AppContext);
  let [time,setTime] = useState(3)
  let [is_E1,is_E2,is_E3,is_E4] = [ArrChildID?.includes("S_E1"),ArrChildID?.includes("S_E2"),ArrChildID?.includes("S_E3"),ArrChildID?.includes("S_E4")];
  let [delayArr,setDelayArr] = useState(delayTimer([is_E1,is_E2,is_E3,is_E4]))

    return (
    <>
    <RestaurantContext.Provider value={{delayArr,time,is_E1,is_E2,is_E3,is_E4}}>
    <AnimatePresence mode="wait">
      <motion.div 
      preserveDisplay 
      {...bgFadeEffect("#155B46","#ffcc0000",isActive)}
      style={{
        paddingTop:"1rem",
        // backgroundColor:"var(--color-Res-primary)",
        width:"100vw",
        height:"100dvh",
        overflow:"auto"
      }}
      >
        {is_E1 ? <RestaurantTreeHandlelr Child_partID={"S_E1"}/> : ""}


        {is_E2 ? <RestaurantTreeHandlelr Child_partID={"S_E2"}/> : ""}
        
        {is_E3 ? <RestaurantTreeHandlelr Child_partID={"S_E3"}/> : ""}

        {is_E4 ? <NearbyRes/> : ""}


      </motion.div>
      </AnimatePresence>
      </RestaurantContext.Provider>
    </>
  );
}

export {RestaurantContext}