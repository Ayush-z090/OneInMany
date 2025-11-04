import { createContext, useEffect, useRef, useState } from 'react'
import './App.css'
import ComponentHandler, { UserQueryHandler } from './ComponentHandler/ComponentHandler'
import BG_Img from "./assets/Bg.jpg"
import RestaurantPage from './Pages/RestaurantPage/RestaurantPage'
import { SnackbarProvider } from 'notistack'
import { useLocation } from 'react-router-dom'
import NikePage from './Pages/NikeShoePage/Home_Nike'
import PageTransition from './PageTransition'
import gsap from 'gsap'
import Product_Nike from './Pages/NikeShoePage/Product_Nike'
import Nike_page from './Pages/NikeShoePage/Nike_page'
import Home_Nike from './Pages/NikeShoePage/Home_Nike'
// this Component will be foucesd on handling routes
let AppContext = createContext()

// P1_WA_01 - P1_HM_02 - P1_RA_03 - P1_NS_04
// the code ids meaning
// WA -weather app - total elemt = 3
// HM - Home page - total elemt = 3
// RA - Restaurant page - total elemt = 4
// NS - Nike Shoe page - total elemt = 8

function App() {
  let location = useLocation()
  // this hook controls the strating and ending animation i.e in-out animation
  let [isActive,setActivestate] = useState(true)

  // this hook tracks what page to naviagte note that navigation part is done in component handler script - this id code is choosen by ai 
  let [ParentID ,setParentID] = useState("P1_HM_02");

  // as Ai will handle what part or component or elemnts to render  this array will handles that logic
  let [ArrChildID,setArrChildID] = useState(["S_E1","S_E2","S_E3","S_E4","S_E5","S_E6","S_E7","S_E8","S_E11","S_E12"]);

  // this hook helps to transfer the ai response to every part of the this app tree
  let [fch_data,set_Fch_data] = useState("");

  
  const PassContextValue = {
    ParentID,
    setParentID,
    ArrChildID,
    setArrChildID,
    isActive,
    setActivestate,
    fch_data
    ,set_Fch_data
  }

  return(
    <>
      { location.pathname === "/NearBytaste" ? "" : <img src={BG_Img} alt="" />}
    <SnackbarProvider 
    transitionDuration={180}

    autoHideDuration={5 * 1000}
      anchorOrigin={{
        vertical: 'top',   // 'top' or 'bottom'
        horizontal: location.pathname !== "/Home" ? "right" : 'center',  // 'left' | 'center' | 'right'
      }}    
    maxSnack={1}
    style={{
      width:"45vw",
      maxHeight:"30dvh",
      overflow:"auto"
    }}
    >
      <AppContext.Provider value={PassContextValue} > 
        {ParentID === "P_0" ? "" : <PageTransition/>}
        <ComponentHandler />
       {location.pathname === "/Home" ? "" : <UserQueryHandler />}
      </AppContext.Provider>
    </SnackbarProvider>
    </>
  )
}

export default App
export {AppContext}
