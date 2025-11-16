import React, { useContext } from 'react'
import NikeTreeHandling from '../../ComponentHandler/tree/NIkePage_tree'
import { AnimatePresence } from 'framer-motion'
import { HomeNikeContext } from './Nike_page'


// export {HomeNikeContext}

const Home_Nike = () => {
 
  let {is_E2,is_E3,is_E4,is_E5,is_E6,is_E7} = useContext(HomeNikeContext)

  return (
      <AnimatePresence mode='sync'>
        {is_E2 ? <NikeTreeHandling Child_partID={"S_E2"}/> : ""}

        <div 
      style={!is_E3 && !is_E4 ? {display:"none"} : {}} 
      className='bg-white !px-[10vw] mb-section-pd'>
        {is_E3 ? <NikeTreeHandling Child_partID={"S_E3"}/> : ""}
        {is_E4 ? <NikeTreeHandling Child_partID={"S_E4"}/> : ""}

        </div>
        {/* <Info/> */}
        {is_E5 ? <NikeTreeHandling Child_partID={"S_E5"}/> : ""}

      <div 
      style={!is_E6 && !is_E7 ? {display:"none"} : {}} 
      className="bg-white !px-[10vw] mb-section-pd">

        {is_E6 ? <NikeTreeHandling Child_partID={"S_E6"}/> : ""}
        {is_E7 ? <NikeTreeHandling Child_partID={"S_E7"}/> : ""}
      </div>
    </AnimatePresence>
  )
}

export default Home_Nike