import styles from "./WeatherHome.module.css";
import componentRetriever from "../../ComponentHandler/Object_tree";
import { useContext } from "react";
import { AppContext } from "../../App";

let DEmoID = "P1_WA_S1_01"


export default function WeatherHomeSection() {
// small demo state: theme (light/dark) and mock weather data
let {ArrChildID} = useContext(AppContext);
let [is_E1,is_E2,is_E3] = [ArrChildID?.includes("S_E1"),ArrChildID?.includes("S_E2"),ArrChildID?.includes("S_E3")];



return (
  <section
  className={styles.section} 
  data-theme="dark">

    <div 
    className={styles.bgDecor} 
    aria-hidden />

    {is_E1 ? componentRetriever(DEmoID,"S_E1") : ""}

    <main
    style={is_E2 || is_E3 ? {display:"flex",justifyContent:"center"} : {}}
    className={styles.content}>

      <div 
      style={is_E3 ? {display:"none"} : {}}
      className={styles.left}>

      {is_E2 ? componentRetriever(DEmoID,"S_E2") : ""}

      </div>

      <div 
      style={is_E2 ? {display:"none"} : {}}
      className={styles.right}>

      {is_E3 ? componentRetriever(DEmoID,"S_E3") : ""}

      </div>

    </main>

    <footer className={styles.footer}>w
      <div>Made with ❤️ · demo data</div>
      <div className={styles.controls}>
        <button className={styles.smallBtn}>Save Location</button>
        <button className={styles.smallBtn}>Share</button>
      </div>
    </footer>
  </section>
);}

