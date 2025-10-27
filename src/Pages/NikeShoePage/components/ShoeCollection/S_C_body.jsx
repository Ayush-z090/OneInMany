import React, { useContext } from 'react'
import { ShoeCard } from '../Header/Header'
import Shoe_1_Logo from "../../assets/images/big-shoe1.png"
import { AnimatePresence, motion } from 'framer-motion'
import { NikeContext } from '../../Nike'
import { slideFade } from '../../../../JS_Scrips/Animate'


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
    },{
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
},
{
    id:3,
    name:"nike dunk shoe",
    image:Shoe_1_Logo,
    price:440
},
{
    id:3,
    name:"nike dunk shoe",
    image:Shoe_1_Logo,
    price:440
}
]



const S_C_body = () => {

    let {time,delayArr,is_E4} = useContext(NikeContext)

  return (
    <AnimatePresence>
        <motion.div 
        {...slideFade(time,is_E4,delayArr[3])}
        key={"comp_4"}
        layout
        className='text-black'>
            <h1 className='text-center text-6xl capitalize font-semibold mt-8 mb-36'>Our best collection</h1>
            <div className='flex flex-wrap gap-x-5 gap-y-20 pb-32 justify-center'>
            {shoeCards.map(card=>
            <ShoeCard 
            image={card.image} 
            price={card.price} 
            name={card.name} 
            key={card.id} 
            width={"w-[21rem]"} 
            height={"h-[12rem]"}
            bgColor={"transparent border-[4px]"}/> )}

            </div>
        </motion.div>
    </AnimatePresence>
  )
}

export default S_C_body