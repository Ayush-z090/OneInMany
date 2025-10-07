import React, { useContext } from "react";
import styles from "./HomePage.module.css";
import BG_Img from "../../assets/Bg.jpg"
import { AppContext } from "../../App";
import HomepageTreeHandler from "../../ComponentHandler/tree/Homepage_tree";
import { delayTimer } from "../../JS_Scrips/Animate";

export default function HomePage() {

  let {ArrChildID} = useContext(AppContext)

  let [is_E1,is_E2,is_E3] = [ArrChildID?.includes("S_E1"),ArrChildID?.includes("S_E2"),ArrChildID?.includes("S_E3")];
  
 let time = 5

 let delayArr = delayTimer([is_E1,is_E2,is_E3])

  return (
    <div className={styles.container}>
      {/* <img src={BG_Img} alt="" /> */}
      {is_E1 ?  <HomepageTreeHandler Child_partID={"S_E1"} time={time}  delay={delayArr[0]}/> : ""}

      <div className={styles.features}>
      {is_E2 ?  <HomepageTreeHandler Child_partID={"S_E2"} time={time}  delay={delayArr[1]}/> : ""}
      </div>
      {is_E3 ?  <HomepageTreeHandler Child_partID={"S_E3"} time={time}  delay={delayArr[2]}/> : ""}
    </div>
  );
}


