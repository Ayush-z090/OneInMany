import React, { createContext, useContext } from 'react'
import { AppContext } from '../../App'
import NikeTreeHandling from '../../ComponentHandler/tree/NIkePage_tree'
import { delayTimer } from '../../JS_Scrips/Animate'
import { AnimatePresence } from 'framer-motion'


let NikeContext = createContext()
export {NikeContext}

const Nike = () => {
 
  let {ArrChildID} = useContext(AppContext)
  let [is_E1,is_E2,is_E3,is_E4,is_E5,is_E6,is_E7,is_E8]  =
   [
    ArrChildID?.includes("S_E1"),
    ArrChildID?.includes("S_E2"),
    ArrChildID?.includes("S_E3"),
    ArrChildID?.includes("S_E4"),
    ArrChildID?.includes("S_E5"),
    ArrChildID?.includes("S_E6"),
    ArrChildID?.includes("S_E7"),
    ArrChildID?.includes("S_E8"),
  ];
  let time = 5
  let delayArr = delayTimer([is_E1,is_E2,is_E3,is_E4,is_E5,is_E6,is_E7,is_E8])
  const ShareValues ={
    is_E1,is_E2,is_E3,is_E4,is_E5,is_E6,is_E7,is_E8,time,delayArr
  }

  return (
    <NikeContext.Provider value={ShareValues}>
      <AnimatePresence mode='sync'>
      <div className='w-dvw h-dvh bg-bg-1 overflow-auto  font-pop'>
        {is_E1 ? <NikeTreeHandling Child_partID={"S_E1"}/> : ""}
        {is_E2 ? <NikeTreeHandling Child_partID={"S_E2"}/> : ""}

        <div 
      style={!is_E3 && !is_E4 ? {display:"none"} : {}} 
      className='bg-white !px-[14rem]'>
        {is_E3 ? <NikeTreeHandling Child_partID={"S_E3"}/> : ""}
        {is_E4 ? <NikeTreeHandling Child_partID={"S_E4"}/> : ""}

        </div>
        {/* <Info/> */}
        {is_E5 ? <NikeTreeHandling Child_partID={"S_E5"}/> : ""}

      <div 
      style={!is_E6 && !is_E7 ? {display:"none"} : {}} 
      className="bg-white !px-[14rem]">

        {is_E6 ? <NikeTreeHandling Child_partID={"S_E6"}/> : ""}
        {is_E7 ? <NikeTreeHandling Child_partID={"S_E7"}/> : ""}
      </div>
      {is_E8 ? <NikeTreeHandling Child_partID={"S_E8"}/> : ""}
      </div>
    </AnimatePresence>
    </NikeContext.Provider>
  )
}

export default Nike