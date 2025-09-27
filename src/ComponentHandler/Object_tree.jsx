import WeaterTreeHandling from "./Weather_Tree";


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


 
export default function componentRetriever(Parent_id,Child_partID){ // (id -> str - elemnt id , tree -> object - object - tree)

    if (Parent_id === "P1_WA_S1_01" ){
        return <WeaterTreeHandling Child_partID={Child_partID}/>
    }

    // return ReturnElmnt
}


