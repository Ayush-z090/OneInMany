import { createContext, useState } from 'react'
import './App.css'
import ComponentHandler from './ComponentHandler/ComponentHandler'
import BG_Img from "./assets/Bg.jpg"
// this Component will be foucesd on handling routes
let AppContext = createContext()

// P1_WA_01 - P1_HM_02

function App() {
  let [ParentID ,setParentID] = useState("P1_WA_01");
  let [ArrChildID,setArrChildID] = useState(["S_E1","S_E2","S_E3"]);
  let [fch_data,set_Fch_data] = useState("");
  
  const PassContextValue = {
    ParentID,
    setParentID,
    ArrChildID,
    setArrChildID

  }

  // console.log(ArrChildID)
  return(
    <>
      <img src={BG_Img} alt="" />

    <AppContext.Provider value={PassContextValue} > 
      <ComponentHandler/>
    </AppContext.Provider>

    </>
  )
}

export default App
export {AppContext}
