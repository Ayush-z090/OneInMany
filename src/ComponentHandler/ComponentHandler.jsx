import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";
import { Route,Routes } from 'react-router-dom'
import WeatherHomeSection from "../Pages/WeatherHomePage/WeatherHome";
import HomePage from "../Pages/HomePage/Homepage";


export default function ComponentHandler(){

    let navigate = useNavigate();
    let {ParentID,setArrChildID} = useContext(AppContext);

    useEffect(()=>{

        switch(ParentID){
            case "P1_WA_01" :{ // weatherApp
                // setArrChildID(["S_E1","S_E2"])
                navigate("/weather")
                return;
            }
            case "P1_HM_02" : { // homepage
                navigate("/Home")
                return;
            }
            
        }
    
    },[])


    return(
        <>

            <Routes>
                <Route path="/home" element={<HomePage/>}/>
                <Route path='/weather' element={<WeatherHomeSection/>}/>
          </Routes>

            
        </>
    )
}