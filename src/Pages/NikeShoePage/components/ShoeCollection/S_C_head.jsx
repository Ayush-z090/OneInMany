import React, { useContext } from 'react'
import shoeLogo from '../../assets/images/shoe8.svg'
import { AnimatePresence, motion } from 'framer-motion'
import { NikeContext } from '../../Nike'
import { slideFade } from '../../../../JS_Scrips/Animate'

const demoCardData = [
    {
        id:1,
        icon :'',
        head:"Best quality shoe",
        body:"adipisicing elit. Fuga at, reiciendis temporibus assumenda id cum enim eius u"
    },
    {
        id:2,
        icon :'',
        head:"Best quality shoe",
        body:"adipisicing elit. Fuga at, reiciendis temporibus assumenda id cum enim eius u"
    },
    {
        id:3,
        icon :'',
        head:"Best quality shoe",
        body:"adipisicing elit. Fuga at, reiciendis temporibus assumenda id cum enim eius u"
    }
]

const S_C_head = () => {

    let {time,delayArr,is_E3} = useContext(NikeContext)


  return (
    <AnimatePresence>
        <motion.div 
        layout
        key={"comp_3"}
        {...slideFade(time,is_E3,delayArr[2])}
        className='flex mt-18 gap-16 box-border text-black  py-[12rem]'
        aria-label='head-body'>
            <div className='w-[50%] flex flex-col gap-8 ' aria-label='heading-left-body'>
                <h1 
                className='text-6xl capitalize font-semibold'>know about best features in shoes</h1>
                <p 
                className='font-normal text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga at, reiciendis temporibus assumenda id cum enim eius uam.</p>
                <div className='flex flex-col gap-4' aria-label='img-right-body'>
                    {demoCardData.map(data=> <Card icon={data.icon} head={data.head} body={data.body} key={data.id}/>)}
                </div>
            </div>
            <img 
            className=' scale-110'
            src={shoeLogo} alt="" />

        </motion.div>
    </AnimatePresence>
  )
}

const Card = ({icon,head,body})=>{


    return(
        <>
            <div 
            className='flex justify-center items-center gap-2 w-full min-h-[6rem]' aria-label='feature card'>
                <img 
                className='w-[8vh] h-[8vh] bg-black'
                 alt="" />
                <div className=' max-w-[90%]'>
                    <h1
                    className='text-3xl font-medium'>{head}</h1>
                    <p
                    className='text-lg'
                    >{body}</p>
                </div>
            </div>
        </>
    )
}

export default S_C_head