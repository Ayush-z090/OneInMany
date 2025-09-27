import { useState } from "react";
import  {Navbar,SearchBox,WeatherInfo,Highlights,HourlyForecast} from "../Pages/HomePage/Component/Component"

// compoenet oobjecct tree is a object tree created to make the whole component change into id based system

let Component_Object_tree = {
    // P1 reprsent page1 , WA refers weather APP ,S1 refers to section one and 0N (n -> 1,2,3...) represnt the elemnts
    P1_WA_S1_01 : {
            S_E1 :(location,units,setUnits)=><Navbar location={location} units={units} setUnits={setUnits} />
            ,
            S_E2 : (setLocation,location,units,weather)=> 
                <>
                    <SearchBox onSelectLocation={setLocation}/>
                    <WeatherInfo weather={weather} units={units} city={location.city} />
                </>,
            S_E3:(weather,units)=>(
                <>
                    <HourlyForecast hourly={weather.hourly} units={units} />
                    <Highlights weather={weather} />
                </>
            )
        },
    P1_WA_S1_02 : "J",
    P1_WA_S1_03 : "K"

}

const weather = {
    temp: 19,
    feels: 18,
    condition: "Partly Cloudy",
    humidity: 62,
    windKmph: 13,
    uvIndex: "Moderate",
    sunrise: "6:43 AM",
    sunset: "7:32 PM",
    hourly: [
      { time: "Now", temp: 19, icon: "partly" },
      { time: "12 PM", temp: 21, icon: "clear" },
      { time: "1 PM", temp: 22, icon: "sun" },
      { time: "2 PM", temp: 23, icon: "sun" },
      { time: "3 PM", temp: 22, icon: "partly" },
      { time: "4 PM", temp: 20, icon: "cloud" },
      { time: "5 PM", temp: 18, icon: "cloud" }
    ]
};


// this function will return the elemnt if a object is given then it tell which component to render ...
 
export default function componentRetriever(Parent_id,Child_partID){ // (id -> str - elemnt id , tree -> object - object - tree)
    const [location, setLocation] = useState({ city: "San Francisco", country: "US" });
    const [units, setUnits] = useState("C"); // C or F

    let ReturnElmnt = ""

    if (Parent_id === "P1_WA_S1_01" ){

        if (Child_partID === "S_E1") 
            ReturnElmnt = Component_Object_tree.P1_WA_S1_01.S_E1(location,units,setUnits)

        else if (Child_partID === "S_E2") ReturnElmnt = Component_Object_tree.P1_WA_S1_01.S_E2(setLocation,location,units,weather)

        else if (Child_partID === "S_E3") ReturnElmnt = Component_Object_tree.P1_WA_S1_01.S_E3(weather,units)
        else return ;
    }

    return ReturnElmnt
}


