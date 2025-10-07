import { useContext, useEffect, useState } from "react";
import  {Navbar,SearchBox,WeatherInfo,Highlights,HourlyForecast} from "../../Pages/WeatherHomePage/Component/Component"
import { WeatherContext } from "../../Pages/WeatherHomePage/WeatherHome";

let Component_Object_tree = {
    // P1 reprsent page1 , WA refers weather APP ,S1 refers to section one and 0N (n -> 1,2,3...) represnt the PageNumber
    P1_WA_S1 : {
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
                    <Highlights weather={weather} astro={astro} />
                </>
            )
        },
    P1_WA_S1_02 : "J",
    P1_WA_S1_03 : "K"

}


export default function WeaterTreeHandling({Child_partID}){
    let {  units,setUnits,weather,setWeather,location,setLocation,astro,setAstro
    } = useContext(WeatherContext)

    
    let ReturnElmnt = ""


    if (Child_partID === "S_E1") 
        ReturnElmnt = Component_Object_tree.P1_WA_S1.S_E1(location,units,setUnits)

    else if (Child_partID === "S_E2") ReturnElmnt = Component_Object_tree.P1_WA_S1.S_E2(setLocation,location,units,weather)

    else if (Child_partID === "S_E3") ReturnElmnt = Component_Object_tree.P1_WA_S1.S_E3(astro,weather,units)

    else return ;

    return ReturnElmnt;

}