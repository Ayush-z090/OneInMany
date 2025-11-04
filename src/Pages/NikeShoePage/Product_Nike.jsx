import { AnimatePresence } from 'framer-motion';
import React, { createContext, useContext } from 'react'
import NikeTreeHandling from '../../ComponentHandler/tree/NIkePage_tree';
import { AppContext } from '../../App';
import { delayTimer } from '../../JS_Scrips/Animate';
import { productNikeContext } from './Nike_page';


const Product_Nike = () => {

  let {is_E11,is_E12} = useContext(productNikeContext)
  return (
        <AnimatePresence mode='sync'>
            <div className='flex bg-white font-pop'>
                {is_E11 ? <NikeTreeHandling Child_partID={"S_E11"}/> : ""}
                {is_E12 ? <NikeTreeHandling Child_partID={"S_E12"}/> : ""}
            </div>
        </AnimatePresence>
  )
}

export default Product_Nike