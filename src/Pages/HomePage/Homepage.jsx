import React, { useContext } from "react";
import styles from "./HomePage.module.css";
import BG_Img from "../../assets/Bg.jpg"
import { AppContext } from "../../App";
import HomepageTreeHandler from "../../ComponentHandler/tree/Homepage_tree";

let DEmoID = "P1_HM_02"

export default function HomePage() {

  let {ArrChildID} = useContext(AppContext)

  let [is_E1,is_E2,is_E3] = [ArrChildID?.includes("S_E1"),ArrChildID?.includes("S_E2"),ArrChildID?.includes("S_E3")];


  return (
    <div className={styles.container}>
      <img src={BG_Img} alt="" />
      {is_E1 ?  <HomepageTreeHandler Child_partID={"S_E1"}/> : ""}

      <div className={styles.features}>
      {is_E2 ?  <HomepageTreeHandler Child_partID={"S_E2"}/> : ""}
      </div>
      {is_E3 ?  <HomepageTreeHandler Child_partID={"S_E3"}/> : ""}
    </div>
  );
}
