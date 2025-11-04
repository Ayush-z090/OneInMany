import React, { useContext } from 'react'
import NikeLogo from "../../assets/icons/nikeLogo.png"
import SearchIcon from "../../assets/icons/search.png"
import ShoppingCart from "../../assets/icons/shopping-cart.png"
import User from "../../assets/icons/user.png"
import { HomeNikeContext } from '../../Nike_page'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import { slideFade } from '../../../../JS_Scrips/Animate'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../../../App'


let HomePageIDs = ["S_E1","S_E2","S_E3","S_E4","S_E5","S_E6","S_E7","S_E8"];
let ProductPageIDs = ["S_E11","S_E12"];

const Navbar = () => {

  let {time,delayArr,is_E1} = useContext(HomeNikeContext)
  let {ArrChildID,setArrChildID} = useContext(AppContext)
  let navigate = useNavigate()
  return (
  <AnimatePresence>
    <motion.div 
    layout
    key={'comp_1'}
    {...slideFade(time,is_E1,delayArr[0])}
    className='w- full flex !m-auto justify-between  !py-4 items-center box-border !px-[14rem]' >
        <div className='w-[7rem] h-[7.5rem] relative' aria-roledescription='logo'>
            <img className='absolute w-full h-full top-0 left-0  object-cover' src={NikeLogo} alt="" />
        </div>
        <div className='flex gap-4  text-lg'>
            <a
            id='Home'
            className='cursor-pointer !px-5 !py-2 hover:bg-white hover:text-black hover:rounded-md transition-all duration-300' onClick={(e)=>{
              e.preventDefault();
              setArrChildID([...ArrChildID,...HomePageIDs])
              navigate("/NikeShoes")
            }}>Home</a>
            <a 
            id='About'
            className='!px-5 !py-2 hover:bg-white hover:text-black hover:rounded-md transition-all duration-300' href="#">About</a>
            <a
            id='Product'
            onClick={(e)=>{
              setArrChildID([...ProductPageIDs,...ArrChildID])
              e.preventDefault();
              navigate("product")
            }}
            className='!px-5 !py-2 cursor-pointer hover:bg-white hover:text-black hover:rounded-md transition-all duration-300' >Product</a>
            <a
            id='Testemonial'
            className='!px-5 !py-2  hover:bg-white hover:text-black hover:rounded-md transition-all duration-300' href="#">Testemonial</a>
        </div>
        <div className='flex gap-6 text-lg'> 
            <img className='w-5 h-5 cursor-pointer' src={SearchIcon} alt="" />
            <img className='w-5 h-5 cursor-pointer' src={ShoppingCart} alt="" />
            <img className='w-5 h-5 cursor-pointer bg-white rounded-[50%]' src={User} alt="" />
        </div>
    </motion.div>
  </AnimatePresence>
  )
}

export default Navbar 