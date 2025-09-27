import componentRetriever from "./Object_tree"
import Styles from "./ComonentHandler.module.css"
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";
import { Route,Routes } from 'react-router-dom'
import WeatherHomeSection from "../Pages/HomePage/WeatherHome";


export default function ComponentHandler(){

    let navigate = useNavigate();
    let {ParentID,setArrChildID} = useContext(AppContext);

    useEffect(()=>{

        switch(ParentID){
            case "P1_WA_S1_01" :{
                
                // setArrChildID(["S_E1","S_E2"])
                navigate("/weather")
                return;

            }
        }
    
    },[])


    return(
        <>

            <Routes>
              <Route path='/weather' element={<WeatherHomeSection/>}/>
          </Routes>

            
        </>
    )
}