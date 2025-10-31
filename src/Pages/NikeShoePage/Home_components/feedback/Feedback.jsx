import React, { useContext, useState } from 'react'
import galleryImg from "../../assets/images/NikeGallery.jpg"
import customer1Img from "../../assets/images/customer1.jpeg"
import customer2Img from "../../assets/images/customer2.svg"
import facebookIcon from "../../assets/icons/facebook.svg"
import twitterIcon from "../../assets/icons/twitter.svg"
import instagramIcon from "../../assets/icons/instagram.svg"
import { NikeContext } from '../../Nike'
import { slideFade } from '../../../../JS_Scrips/Animate'
import { AnimatePresence, motion } from 'framer-motion'


const Feedback = () => {

    const {time,delayArr,is_E6}= useContext(NikeContext)

  return (
    <AnimatePresence>
        <motion.div
        {...slideFade(time,is_E6,delayArr[5])}
        key={"comp_6"}
        className='bg-white text-black !py-[10rem] '>
            <h1
            className='text-5xl capitalize text-center font-semibold'
            >lets see our photo gallery</h1>
            <img 
            className='!mt-20 rounded-[9px] w-[62vw] !mx-auto'
            src= {galleryImg} alt='#'/>
        </motion.div>
    </AnimatePresence>
  )
}


let Reviews = [
    {
        h1:"These Guys Make Really Cool and High-Quality Products",
        p:"The main stage of market research allows for a popular rating, relying on insider information. Production meaningfully inhibits interpersonal repeated contact. According to Philip Kotler's already classic work, market price analysis is based on experience.",
        img:customer1Img
    },
    {
        h1:"this product looks good !",
        p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At quibusdam voluptate accusantium ratione iusto, soluta dignissimos ullam dolores provident fugit nesciunt ab a maxim",
        img:customer2Img
    }
]


const FeedbackCard=()=>{

    const {time,delayArr,is_E7} = useContext(NikeContext)
    let [rev_num,setReview_num] = useState(0)
    console.log(rev_num)
    return(
    <AnimatePresence>
        <motion.div
        layout
        key={"comp_7"}
        {...slideFade(time,is_E7,delayArr[6])}
        className="bg-white w-[95%] flex !pb-10">
            {/* Left Section - Text Content */}
            <div className="flex-1 !p-16 flex flex-col justify-between">
                {/* Top Section */}
                <div className="flex justify-between items-start !mb-8">
                    <div>
                        <h2 className="text-2xl font-bold text-black !mb-1">Mitchell Chambers</h2>
                        <p className="text-gray-600">Founder of Creative Solution</p>
                    </div>
                    <div className="flex space-x-3">
                        <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center">
                            <img src={facebookIcon} alt="Facebook" className="w-5 h-5" />
                        </div>
                        <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center">
                            <img src={twitterIcon} alt="Twitter" className="w-5 h-5" />
                        </div>
                        <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center">
                            <img src={instagramIcon} alt="Instagram" className="w-5 h-5" />
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 flex items-center">
                    <div className="flex items-start">
                        <div className="text-6xl text-gray-300 font-serif !mr-6 leading-none">"</div>
                        <div>
                            <h1 className="text-4xl font-bold text-black leading-tight !mb-6 max-w-lg">
                                {Reviews[rev_num].h1}
                            </h1>
                            <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
                                {Reviews[rev_num].p}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex justify-between items-center">
                    <div className="text-gray-400 text-sm">02/10</div>
                    <div className="flex space-x-2">
                        <button 
                        onClick={()=>{rev_num > 0 ? setReview_num(--rev_num) : ""}}
                        className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <button 
                        onClick={() => {rev_num < Reviews.length - 1 ? setReview_num(++rev_num) : ""}}
                        className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Section - Image */}
            <div className="flex-1 relative">
                <div className="absolute top-0 left-0 w-full h-full bg-red-500 opacity-10"></div>
                <div className="absolute bottom-0 left-0 w-full h-2 bg-red-500"></div>
                <div className="absolute top-0 left-0 w-full h-2 bg-red-500"></div>
                <img 
                    src={Reviews[rev_num].img} 
                    alt="Customer testimonial" 
                    className="w-full h-full object-cover"
                />
            </div>
        </motion.div>
        </AnimatePresence>
    )
}

export  {Feedback, FeedbackCard}