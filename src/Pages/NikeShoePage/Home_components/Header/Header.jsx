import  Button from '@mui/material/Button'
import React, { useContext } from 'react'
import Shoe_0_Logo from "../../assets/images/big-shoe2.png"
import Shoe_1_Logo from "../../assets/images/big-shoe1.png"
import { AnimatePresence, motion } from 'framer-motion'
import { slideFade } from '../../../../JS_Scrips/Animate'
import { HomeNikeContext } from '../../Nike_page'
import "../../tailwind_utilites/Home_utility.css"
import { AppContext } from '../../../../App'

const shoeCards = [
    {
        id:1,
        name:"nike sports shoe",
        image:Shoe_1_Logo,
        price:340
    },
    {
        id:2,
        name:"nike air span",
        image:Shoe_1_Logo,
        price:540
    },{
        id:3,
        name:"nike dunk shoe",
        image:Shoe_1_Logo,
        price:440
    }
]


const Header = () => {

    let {isWidthLimit} = useContext(AppContext)
    let {time,delayArr,is_E2} = useContext(HomeNikeContext)


  return (
    <AnimatePresence>
        <motion.div
        layout
        {...slideFade(time,is_E2,delayArr[1])}
        key={"comp_2"}
        className=' w-full h-fit box-border !px-[10vw] !pb-12 mb-section-pd'>
            <div className='flex mb-heading-parent' aria-label='heading-mid'>
                <div className='w-[50%] !mt-20  mb-head-heading' aria-label='heading-part' >
                    <h1 className='text-[6rem] text-text-01 uppercase font-bold leading-normal'>
                        Comfort 
                        <p className='text-[4rem] font-semibold text-white'>awaits everyday</p>
                    </h1>
                    <Button className='!bg-text-02 text-black !px-[4rem] !py-4 text-lg !mt-[4rem] mb-button'>shop Now</Button>
                </div>
                {isWidthLimit ? "" : <div className='realtive w-[50%] h-full scale-100 rotate-12' aria-label='shoe-img'>
                    <img src={Shoe_0_Logo} alt="" />
                </div>}
            </div> 
            <div className='flex box-border !pt-4 !pb-4 !mt-16 gap-7 mb-shoe-card ' aria-label='shoe cards'>
                {shoeCards.map(card=><ShoeCard image={card.image} price={card.price} name={card.name} key={card.id}/>)}
            </div>
        </motion.div>
    </AnimatePresence>
  )
}

export default Header


function ShoeCard({image,price,name , bgColor,width,height}){
    return(
        <>
            <div 
            className={`${!width ? "w-[14.5rem]" : width } ${height ? height : "h-32"} ${bgColor ? bgColor : "bg-bg-2"} relative box-border !pt-16 text-lg rounded-2xl `}>
                <img 
                className='absolute w-36 h-36 top-[-5rem] lef-[50%] right-[50%] translate-x-[50%] rotate-12 '
                src={image} alt="" />
                <p
                className='capitalize text-center font-semibold text-[1rem]' >{name}</p>

                <p className='capitalize text-text-02 text-center !mt-2 font-bold'>${price}</p>
                
            </div>
        </>
    )

}

export {ShoeCard}