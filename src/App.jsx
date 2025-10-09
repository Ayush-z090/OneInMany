import { createContext, useState } from 'react'
import './App.css'
import ComponentHandler from './ComponentHandler/ComponentHandler'
import BG_Img from "./assets/Bg.jpg"
import RestaurantPage from './Pages/RestaurantPage/RestaurantPage'
// this Component will be foucesd on handling routes
let AppContext = createContext()

// P1_WA_01 - P1_HM_02 - P1_RA_03
// the code ids meaning
// WA -weather app - total elemt = 3
// HM - Home page - total elemt = 3
// RA - Restaurant page - total elemt = 4

function App() {
  // this hook controls the strating and ending animation i.e in-out animation
  let [isActive,setActivestate] = useState(true)

  // this hook tracks what page to naviagte note that navigation part is done in component handler script - this id code is choosen by ai 
  let [ParentID ,setParentID] = useState("P1_RA_03");

  // as Ai will handle what part or component or elemnts to render  this array will handles that logic
  let [ArrChildID,setArrChildID] = useState(["S_E1","S_E2","S_E3",""]);

  // this hook helps to transfer the ai response to every part of the this app tree
  let [fch_data,set_Fch_data] = useState("");
  
  const PassContextValue = {
    ParentID,
    setParentID,
    ArrChildID,
    setArrChildID,
    isActive,
    setActivestate
  }

  // console.log(ArrChildID)
  return(
    <>
      { !isActive ? "" : <img src={BG_Img} alt="" />}
      
    <AppContext.Provider value={PassContextValue} > 
      <ComponentHandler/>
    </AppContext.Provider>

    </>
  )
}

export default App
export {AppContext}
