import React, { useContext } from 'react'
import shoeLogo from '../../assets/images/shoe8.svg'
import { AnimatePresence, motion } from 'framer-motion'
import { HomeNikeContext } from '../../Nike_page'
import { slideFade } from '../../../../JS_Scrips/Animate'
import { AppContext } from '../../../../App'
import "../../tailwind_utilites/Home_utility.css"

const demoCardData = [
    {
        id:"SC1",
        icon :'',
        head:"Best quality shoe",
        body:"adipisicing elit. Fuga at, reiciendis temporibus assumenda id cum enim eius u"
    },
    {
        id:"SC2",
        icon :'',
        head:"Best quality shoe",
        body:"adipisicing elit. Fuga at, reiciendis temporibus assumenda id cum enim eius u"
    },
    {
        id:"SC3",
        icon :'',
        head:"Best quality shoe",
        body:"adipisicing elit. Fuga at, reiciendis temporibus assumenda id cum enim eius u"
    }
]

const S_C_head = () => {

    let {time,delayArr,is_E3} = useContext(HomeNikeContext)
    let {isWidthLimit} = useContext(AppContext)


  return (
    <AnimatePresence>
        <motion.div 
        layout
        key={"comp_3"}
        {...slideFade(time,is_E3,delayArr[2])}
        className='flex !mt-18 gap-16 box-border text-black !py-[12rem] md-head-body'
        aria-label='head-body'>
            <div className='w-[50%] flex flex-col gap-8 md-head-left' aria-label='heading-left-body'>
                <h1 
                className='text-6xl capitalize font-semibold'>know about best features in shoes</h1>
                {isWidthLimit ?
                <img 
                className=' '
                src={shoeLogo} alt="" /> :                 
                 <>
                    <p 
                    className='font-normal text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga at, reiciendis temporibus assumenda id cum enim eius uam.
                    </p>
                    <PointsCard/>
                </>
                 }
                 
            </div>
            {isWidthLimit ? <PointsCard/> : 
            <>
            <img 
            className=' w-[90%]'
            src={shoeLogo} alt="" />
            
            </>}

        </motion.div>
    </AnimatePresence>
  )
}

const PointsCard = ()=>{
    return <>
        <div className='flex flex-col gap-4' aria-label='img-right-body'>
            {demoCardData.map(data=> <Card icon={data.icon} head={data.head} body={data.body} key={data.id}/>)}
        </div>
    </>
}

const Card = ({icon,head,body})=>{

    let {isWidthLimit} = useContext(AppContext);

    return(
        <>
            <div 
            className='flex justify-center items-center gap-2 w-full min-h-[6rem]' aria-label='feature card'>
                {isWidthLimit ? "" : <img 
                className='w-[8vh] h-[8vh] bg-black'
                 alt="" />}
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