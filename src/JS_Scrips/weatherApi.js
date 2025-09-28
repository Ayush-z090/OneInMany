
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY 

let API_URL = 
({apiPath="current.json",location,ExtraParamStr=""})=> `http://api.weatherapi.com/v1/${apiPath}?key=${API_KEY}&q=${location}${ExtraParamStr}` ;


const Weather_Fetch = async ({location,apiPath,ExtraParamStr})=>{
    
    let Fetch_Data = await fetch(API_URL({location:location,apiPath:apiPath,ExtraParamStr:ExtraParamStr}));
    return await Fetch_Data.json();

}

export default Weather_Fetch