import React from 'react'
// import Navbar from './components/Navbar/Navbar'
import Header from '../../Pages/NikeShoePage/Home_components/Header/Header'
import S_C_head from '../../Pages/NikeShoePage/Home_components/ShoeCollection/S_C_head'
import S_C_body from '../../Pages/NikeShoePage/Home_components/ShoeCollection/S_C_body'
import Info from '../../Pages/NikeShoePage/Home_components/Info/Info'
import {Feedback, FeedbackCard} from '../../Pages/NikeShoePage/Home_components/feedback/Feedback'
import Footer from '../../Pages/NikeShoePage/Home_components/Footer/Footer'
import Navbar from '../../Pages/NikeShoePage/Home_components/Navbar/Navbar'
import ShoeFilterSidebar from '../../Pages/NikeShoePage/Product_components/ShoeFilterSidebar'
import ProductCardGrid from '../../Pages/NikeShoePage/Product_components/ProductCardGrid'


let Object_tree = {
    // P1 reprsent page1 , HM refers HOmepage ,S1 refers to section one and 0N (n -> 1,2,3...) represnt the elemnts

P1_NS_S1 : {
    // homepage
    S_E1 : ()=> <Navbar/>,
    S_E2 : ()=> <Header/>,
    S_E3 : ()=> <S_C_head/>,
    S_E4 : ()=> <S_C_body/>,
    S_E5 : ()=> <Info/>,
    S_E6 : ()=> <Feedback/>,
    S_E7 : ()=> <FeedbackCard/>,
    S_E8 : ()=> <Footer/>,
    // product page
    S_E11 : () => <ShoeFilterSidebar/>,
    S_E12 : () => <ProductCardGrid /> 
    }
}

export default function NikeTreeHandling({Child_partID}){
    return !Child_partID ? "" : Object_tree.P1_NS_S1[Child_partID]()
}