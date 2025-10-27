import React, { useContext } from 'react'
import NikeLogo from "../../assets/icons/nikeLogo.png"
import SearchIcon from "../../assets/icons/search.png"
import ShoppingCart from "../../assets/icons/shopping-cart.png"
import User from "../../assets/icons/user.png"
import { NikeContext } from '../../Nike'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import { slideFade } from '../../../../JS_Scrips/Animate'

const Navbar = () => {

  let {time,delayArr,is_E1} = useContext(NikeContext)

  return (
  <AnimatePresence>
    <motion.div 
    layout
    key={'comp_1'}
    {...slideFade(time,is_E1,delayArr[0])}
    className='w- full flex m-auto justify-between  py-4 items-center box-border px-[14rem]' >
        <div className='w-[7rem] h-[7.5rem] relative' aria-roledescription='logo'>
            <img className='absolute w-full h-full top-0 left-0  object-cover' src={NikeLogo} alt="" />
        </div>
        <div className='flex gap-4  text-lg'>
            <a className='px-5 py-2' href="#">Home</a>
            <a className='px-5 py-2' href="#">About</a>
            <a className='px-5 py-2' href="#">Product</a>
            <a className='px-5 py-2' href="#">Testemonial</a>
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