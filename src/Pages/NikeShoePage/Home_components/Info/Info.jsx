import React, { useContext } from 'react'
import shoeLogo from "../../assets/images/shoe7.svg"
import Button from "@mui/material/Button"
import ArrowIcon from "../../assets/icons/arrow-right.svg"
import { AnimatePresence, motion } from 'framer-motion'
import { HomeNikeContext } from '../../Nike_page'
import { slideFade } from '../../../../JS_Scrips/Animate'
import { AppContext } from '../../../../App'

const Info = () => {
  let {time,delayArr,is_E5} = useContext(HomeNikeContext);
  let {isWidthLimit} = useContext(AppContext);

  return (
  <AnimatePresence>
    <motion.div 
    key={"comp_5"}
    layout
    {...slideFade(time,is_E5,delayArr[4])}
    className='flex !mt-18 gap-16 box-border items-center justify-between !px-[10vw] !py-[6rem] mb-section-pd'
    aria-label='head-body'>
                {isWidthLimit ? "" :<img         
        className=' w-[30rem]'
        src={shoeLogo} alt="" />}

        <div className='w-[50%] flex flex-col gap-8  md-infoHead-left' aria-label='heading-left-body'>
            <h1 
            className='text-6xl capitalize font-semibold'>we provide high quality footwears</h1>
            <p 
            className='font-normal text-xl w-[80%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem similique cumque cum cupiditate saepe expedita delectus, tempore, excepturi nesciunt obcaecati libero culpa sequi doloremque alias ipsam, iusto distinctio iure quia.</p>
        <Button 
        className='!bg-text-02 text-black w-[13vw] flex gap-4 !py-4 text-lg !mt-[4rem] '>
            shop Now 
            <img src={ArrowIcon} alt="" />
            </Button>

        </div>

    </motion.div>
  </AnimatePresence>
  )
}

export default Info