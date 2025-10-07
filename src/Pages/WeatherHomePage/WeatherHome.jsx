import styles from "./WeatherHome.module.css";
import { createContext, useState ,useEffect, useContext} from "react";
import { AppContext } from "../../App";
import Weather_Fetch from "../../JS_Scrips/weatherApi";
import WeaterTreeHandling from "../../ComponentHandler/tree/Weather_Tree";
import { delayTimer } from "../../JS_Scrips/Animate";



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

let [time,setTime] = useState(3)
let [delayArr,setDelayArr] = useState(delayTimer([is_E1,is_E2,is_E3]))

let hookVals = {
  units,setUnits,weather,setWeather,location,setLocation,astro,setAstro,time,delayArr
}

useEffect(()=>{

      Weather_Fetch({location:location.name,apiPath:"forecast.json",ExtraParamStr:"&hours=6"}).then(res=> 
          {
              setAstro(res.forecast.forecastday[0].astro)
              console.log(res?.current.vis_km)
              setLocation(res.location)
              setWeather(
                  {
                      temp: units === "C" ? res?.current.temp_c : res?.current.temp_f,
                      feels: units === "C" ? res?.current.feelslike_c : res?.current.feelslike_f,
                      condition: res?.current.condition.text,
                      humidity: res?.current.humidity,
                      windKmph: res?.current.wind_kph,
                      uvIndex: explainUVIndex(res?.current.uv),
                      hourly: getNext7HoursForecast(res.forecast.forecastday[0].hour).hourly,
                      vis:res?.current.vis_km
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

    {is_E1 ? <WeaterTreeHandling Child_partID={"S_E1"} /> : ""}

    <main
    style={!is_E2 || !is_E3 ? {display:"flex",justifyContent:"center"} : {}}
    className={styles.content}>

      <div 
      style={ !is_E2  ? {display:"none"} : {}}
      className={styles.left}>

      {is_E2 ? <WeaterTreeHandling Child_partID={"S_E2"} /> : ""}

      </div>

      <div 
      style={!is_E3 ? {display:"none"} : {}}
      className={styles.right}>

      {is_E3 ? <WeaterTreeHandling Child_partID={"S_E3"} /> : ""}

      </div>

    </main>

    <footer className={styles.footer}>w
      <div>Made with ❤️ Weather api </div>
      <div className={styles.controls}>
        <button className={styles.smallBtn}>Save Location</button>
        <button className={styles.smallBtn}>Share</button>
      </div>
    </footer>
  </section>
  </WeatherContext.Provider>
);}

function getNext7HoursForecast(hourlyArray) {
  const now = new Date();
  const currentHour = now.getHours();

  // Find current + next 6 hours
  const nextHours = hourlyArray
    .filter(h => new Date(h.time).getHours() >= currentHour)
    .slice(0, 7);

  // Format into your desired structure
  return {
    hourly: nextHours.map((h, i) => ({
      time: i === 0 ? "Now" : new Date(h.time).toLocaleTimeString([], { hour: "numeric" }),
      temp: h.temp_c,
      // Simplified text (you can map icons differently if you like)
      icon: h.condition.text.toLowerCase().includes("cloud")
        ? "cloud"
        : h.condition.text.toLowerCase().includes("sun")
        ? "sun"
        : h.condition.text.toLowerCase().includes("clear")
        ? "clear"
        : "partly"
    }))
  };
}

function explainUVIndex(uv) {
  if (uv <= 2) return {val : "Low",message : "Safe for most, minimal protection needed"};
  if (uv <= 5) return {val : "Moderate",message : "Use sunglasses, SPF if long exposure"};
  if (uv <= 7) return {val : " High" ,message : "Use SPF 30+, stay in shade at midday"};
  if (uv <= 10) return {val : 'very High',message : "Extra protection needed, avoid sun 10am–4pm"};
  return {val:'Extreme' , message : 'Avoid sun if possible, SPF 50+, full protection'};
}
