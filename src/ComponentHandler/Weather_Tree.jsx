import { useContext, useEffect, useState } from "react";
import  {Navbar,SearchBox,WeatherInfo,Highlights,HourlyForecast} from "../Pages/HomePage/Component/Component"
import { WeatherContext } from "../Pages/HomePage/WeatherHome";

let Component_Object_tree = {
    // P1 reprsent page1 , WA refers weather APP ,S1 refers to section one and 0N (n -> 1,2,3...) represnt the elemnts
    P1_WA_S1_01 : {
            S_E1 :(location,units,setUnits)=><Navbar location={location} units={units} setUnits={setUnits} />
            ,
            S_E2 : (setLocation,location,units,weather)=> 
                <>
                    <SearchBox onSelectLocation={setLocation}/>
                    <WeatherInfo weather={weather} units={units} city={location.name} />
                </>,
            S_E3:(astro,weather,units)=>(
                <>
                    <HourlyForecast hourly={weather.hourly} units={units} />
                    <Highlights astro={astro} />
                </>
            )
        },
    P1_WA_S1_02 : "J",
    P1_WA_S1_03 : "K"

}


export default function WeaterTreeHandling({Child_partID}){
    let {  units,setUnits,weather,setWeather,location,setLocation,astro,setAstro
    } = useContext(WeatherContext)
    // useEffect(()=>{

    //     Child_partID !== "S_E3" ? "" : Weather_Fetch({apiPath:"astronomy.json",location:location.name}).then(res=>
    //         {
    //             setAstro(res.astronomy.astro)
    //         }).catch(rej => alert("fail to fetch astro data"))

    //     Weather_Fetch({location:location.name}).then(res=> 
    //         {
    //             // setLocation(res.location)
    //             setWeather(
    //                 {
    //                     temp: units === "C" ? res?.current.temp_c : res?.current.temp_f,
    //                     feels: units === "C" ? res?.current.feelslike_c : res?.current.feelslike_f,
    //                     condition: res?.current.condition.text,
    //                     humidity: res?.current.humidity,
    //                     windKmph: res?.current.wind_kph,
    //                     uvIndex: "Moderate",
    //                     hourly: [
    //                       { time: "Now", temp: 19, icon: "partly" },
    //                       { time: "12 PM", temp: 21, icon: "clear" },
    //                       { time: "1 PM", temp: 22, icon: "sun" },
    //                       { time: "2 PM", temp: 23, icon: "sun" },
    //                       { time: "3 PM", temp: 22, icon: "partly" },
    //                       { time: "4 PM", temp: 20, icon: "cloud" },
    //                       { time: "5 PM", temp: 18, icon: "cloud" }
    //                     ]
    //                 }
                
    //             )
    //         }).catch(rej => alert("fail to fetch"))

    // },[location.name,astro.sunrise,astro.sunset])

    
    let ReturnElmnt = ""


    if (Child_partID === "S_E1") 
        ReturnElmnt = Component_Object_tree.P1_WA_S1_01.S_E1(location,units,setUnits)

    else if (Child_partID === "S_E2") ReturnElmnt = Component_Object_tree.P1_WA_S1_01.S_E2(setLocation,location,units,weather)

    else if (Child_partID === "S_E3") ReturnElmnt = Component_Object_tree.P1_WA_S1_01.S_E3(astro,weather,units)

    else return ;

    return ReturnElmnt;

}