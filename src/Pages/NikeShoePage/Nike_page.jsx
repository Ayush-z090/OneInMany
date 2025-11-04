import React, { useContext,createContext, useEffect } from 'react'
import { AppContext } from '../../App'
import NikeTreeHandling from '../../ComponentHandler/tree/NIkePage_tree';
// import { HomeNikeContext } from './Home_Nike';
import { delayTimer } from '../../JS_Scrips/Animate';
import { Outlet, useNavigate } from 'react-router-dom';


let HomeNikeContext = createContext()
export {HomeNikeContext}

let productNikeContext = createContext();
export {productNikeContext}


const Nike_page = () => {

    let navigate = useNavigate();
    let {ArrChildID} = useContext(AppContext);
    let time = 5;
    // HomeNike
    let [is_E1,is_E2,is_E3,is_E4,is_E5,is_E6,is_E7,is_E8,is_E11,is_E12] = [
      ArrChildID?.includes("S_E1"),
      ArrChildID?.includes("S_E2"),
      ArrChildID?.includes("S_E3"),
      ArrChildID?.includes("S_E4"),
      ArrChildID?.includes("S_E5"),
      ArrChildID?.includes("S_E6"),
      ArrChildID?.includes("S_E7"),
      ArrChildID?.includes("S_E8"),
      ArrChildID?.includes("S_E11"),
      ArrChildID?.includes("S_E12") 
    ];
    let delayArr = delayTimer([is_E1, is_E2, is_E3, is_E4, is_E5, is_E6, is_E7, is_E8]);
    const ShareValues = {
      is_E1, is_E2, is_E3, is_E4, is_E5, is_E6, is_E7, is_E8, time, delayArr
    };
    delayArr = delayTimer([is_E11,is_E12])

    const productVal = {
      is_E11,is_E12,delayArr,time
    }
    
    // navigation 

    useEffect(() => {
      is_E11 && is_E12 ? navigate("/NikeShoes/product") : navigate("/NikeShoes");
    }, [is_E11, is_E12]);

  return (
    <HomeNikeContext.Provider value={ShareValues}>
      <productNikeContext.Provider value={productVal}>
        <div className=' bg-bg-1 overflow-auto font-pop w-full h-dvh'>

          {is_E1 ? <NikeTreeHandling Child_partID={"S_E1"}/> : ""}
          <Outlet/>
          {is_E8 ? <NikeTreeHandling Child_partID={"S_E8"}/> : ""}
        </div>
      </productNikeContext.Provider>
    </HomeNikeContext.Provider>
  )
}

export default Nike_page