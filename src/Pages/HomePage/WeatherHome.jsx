import styles from "./WeatherHome.module.css";
import componentRetriever from "../../ComponentHandler/Object_tree";
import { createContext, useState ,useEffect, useContext} from "react";
import { AppContext } from "../../App";
import Weather_Fetch from "../../JS_Scrips/weatherApi";


let DEmoID = "P1_WA_S1_01"

let WeatherContext = createContext()

export {WeatherContext}

export default function WeatherHomeSection() {
// small demo state: theme (light/dark) and mock weather data
const [location, setLocation] = useState({ name: "India" });
const [units, setUnits] = useState("C"); // C or 
const [weather,setWeather] = useState("")
let [astro,setAstro] = useState({sunrise:"",sunset:""})
let {ArrChildID} = useContext(AppContext);
let [is_E1,is_E2,is_E3] = [ArrChildID?.includes("S_E1"),ArrChildID?.includes("S_E2"),ArrChildID?.includes("S_E3")];

let hookVals = {
  units,setUnits,weather,setWeather,location,setLocation,astro,setAstro
}

useEffect(()=>{

      Weather_Fetch({apiPath:"astronomy.json",location:location.name}).then(res=>
      {
          setAstro(res.astronomy.astro)
      }).catch(rej => alert("fail to fetch astro data"))

  Weather_Fetch({location:location.name}).then(res=> 
      {
          setLocation(res.location)
          setWeather(
              {
                  temp: units === "C" ? res?.current.temp_c : res?.current.temp_f,
                  feels: units === "C" ? res?.current.feelslike_c : res?.current.feelslike_f,
                  condition: res?.current.condition.text,
                  humidity: res?.current.humidity,
                  windKmph: res?.current.wind_kph,
                  uvIndex: "Moderate",
                  hourly: [
                    { time: "Now", temp: 19, icon: "partly" },
                    { time: "12 PM", temp: 21, icon: "clear" },
                    { time: "1 PM", temp: 22, icon: "sun" },
                    { time: "2 PM", temp: 23, icon: "sun" },
                    { time: "3 PM", temp: 22, icon: "partly" },
                    { time: "4 PM", temp: 20, icon: "cloud" },
                    { time: "5 PM", temp: 18, icon: "cloud" }
                  ]
              }
          
          )
      }).catch(rej => alert("fail to fetch"))

},[location.name,astro.sunrise,astro.sunset])


return (
  <WeatherContext.Provider value={hookVals}>
  <section
  className={styles.section} 
  data-theme="dark">

    <div 
    className={styles.bgDecor} 
    aria-hidden />

    {is_E1 ? componentRetriever(DEmoID,"S_E1") : ""}

    <main
    style={!is_E2 || !is_E3 ? {display:"flex",justifyContent:"center"} : {}}
    className={styles.content}>

      <div 
      style={ !is_E2  ? {display:"none"} : {}}
      className={styles.left}>

      {is_E2 ? componentRetriever(DEmoID,"S_E2") : ""}

      </div>

      <div 
      style={!is_E3 ? {display:"none"} : {}}
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
  </WeatherContext.Provider>
);}

