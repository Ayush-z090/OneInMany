import React, { useContext } from 'react'
import NikeLogo from "../../assets/icons/nikeLogo.png"
import SearchIcon from "../../assets/icons/search.png"
import ShoppingCart from "../../assets/icons/shopping-cart.png"
import sidebarImg from "../../assets/icons/sidebar.png"
import User from "../../assets/icons/user.png"
import { HomeNikeContext } from '../../Nike_page'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import { slideFade } from '../../../../JS_Scrips/Animate'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../../../App'
import "../../tailwind_utilites/Home_utility.css"

let HomePageIDs = ["S_E1","S_E2","S_E3","S_E4","S_E5","S_E6","S_E7","S_E8"];
let ProductPageIDs = ["S_E11","S_E12"];

const Navbar = () => {

  let {time,delayArr,is_E1 } = useContext(HomeNikeContext)
  let {isWidthLimit} = useContext(AppContext)
  return (
  <AnimatePresence>
    <motion.div 
    layout
    key={'comp_1'}
    {...slideFade(time,is_E1,delayArr[0])}
    className='w- full flex !m-auto justify-between  !py-4 items-center box-border !px-[10vw] mb-nav-body' >
              {isWidthLimit ? <TemporaryDrawer/> : <div className='w-[7rem] h-[7.5rem] relative mb-nav-img' aria-roledescription='logo'>
            <img className='absolute w-full h-full top-0 left-0  object-cover' src={NikeLogo} alt="" />
        </div>}

        
        <div className='flex gap-4  text-lg'>
          {isWidthLimit ? "" : <LinkContainer/>}
        </div>
        <div className='flex gap-6 text-lg '> 
          {isWidthLimit ? <div className='w-[7rem] h-[7.5rem] relative mb-nav-img' aria-roledescription='logo'>
            <img className='absolute w-full h-full top-0 left-0  object-cover' src={NikeLogo} alt="" />
        </div>: ""}
            <img className='w-5 h-5 cursor-pointer' src={ShoppingCart} alt="" />
            <img className='w-5 h-5 cursor-pointer bg-white rounded-[50%]' src={User} alt="" />
        </div>
    </motion.div>
  </AnimatePresence>
  )
}

let LinkContainer = ()=>{
  let {ArrChildID,setArrChildID} = useContext(AppContext)
  let navigate = useNavigate()
  return <>
                <a
            id='Home'
            className='desktop-size-link mb-size-link' onClick={(e)=>{
              e.preventDefault();
              setArrChildID([...ArrChildID,...HomePageIDs])
              navigate("/NikeShoes")
            }}>Home</a>
            <a 
            id='About'
            className='desktop-size-link mb-size-link' href="#">About</a>
            <a
            id='Product'
            onClick={(e)=>{
              setArrChildID([...ProductPageIDs,...ArrChildID])
              e.preventDefault();
              navigate("product")
            }}
            className='desktop-size-link mb-size-link' >Product</a>
            <a
            id='Testemonial'
            className='desktop-size-link mb-size-link' href="#">Testemonial</a>

  </>
}


import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button'

function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List className='flex flex-col gap-3 !pl-5 !pt-5'>
        
        <LinkContainer/>
        
      </List>
      
    </Box>
  );

  return (
    <div>
      <Button
      className='w-[4rem]'
      onClick={toggleDrawer(true)}>
        <img
         className='w-full h-full object-cover'
         src={sidebarImg} alt='#'/></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default Navbar 