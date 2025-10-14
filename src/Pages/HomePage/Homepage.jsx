import React, { createContext, useContext, useState } from "react";
import styles from "./HomePage.module.css";
import BG_Img from "../../assets/Bg.jpg"
import { AppContext } from "../../App";
import HomepageTreeHandler from "../../ComponentHandler/tree/Homepage_tree";
import { delayTimer } from "../../JS_Scrips/Animate";
import { AnimatePresence } from "framer-motion";
import { UserQueryHandler } from "../../ComponentHandler/ComponentHandler";

let HomepageContext = createContext()

export {HomepageContext}

export default function HomePage() {

  let {ArrChildID} = useContext(AppContext)
  let [AI_activate_but , setAI_But] = useState(false)

  let [is_E1,is_E2,is_E3]  = [ArrChildID?.includes("S_E1"),ArrChildID?.includes("S_E2"),ArrChildID?.includes("S_E3")];
  
 let time = 5

 let delayArr = delayTimer([is_E1,is_E2,is_E3])

  const contextValue = {
  time,
  delayArr,
  AI_activate_but, 
  setAI_But,
  is_E1,is_E2,is_E3
 }

  return (
    <HomepageContext.Provider value={contextValue}>
      <AnimatePresence mode="sync">
        <div className={styles.container}>
          {/* <img src={BG_Img} alt="" /> */}
          {is_E1 ?  <HomepageTreeHandler Child_partID={"S_E1"} /> : ""}

          {is_E2 && !AI_activate_but ?  
              <div className={styles.features}>
              <HomepageTreeHandler Child_partID={"S_E2"} /> 
              </div>: ""}
              
          {is_E3 && !AI_activate_but ?  <HomepageTreeHandler Child_partID={"S_E3"} /> : ""}
          {!AI_activate_but ? "" : <UserQueryHandler/>}
        </div>
      </AnimatePresence>
    </HomepageContext.Provider>
  );
}


