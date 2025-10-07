import FeaturesSection from "../../Pages/RestaurantPage/Component/FeatureSection";
import Navbar from "../../Pages/RestaurantPage/Component/Navbar";
import NearbyRes from "../../Pages/RestaurantPage/Component/NearByRes";
import SectionHead from "../../Pages/RestaurantPage/Component/SectionHead";

let Object_tree = {
    P1_RA_S1 :{
        S_E1:()=> <Navbar/>,
        S_E2:()=> <SectionHead/>,
        S_E3:()=> <FeaturesSection/>
    },
    P1_RA_S2 : {
        S_E4:()=> <NearbyRes/>
    }
}

export default function RestaurantTreeHandlelr({Child_partID}){
    let ReturnElmnt = ""


    if (Child_partID === "S_E1")  ReturnElmnt = Object_tree.P1_RA_S1.S_E1()

    else if (Child_partID === "S_E2") ReturnElmnt = Object_tree.P1_RA_S1.S_E2()

    else if (Child_partID === "S_E3") ReturnElmnt = Object_tree.P1_RA_S1.S_E3()

    else if (Child_partID === "S_E4") ReturnElmnt = Object_tree.P1_RA_S1.S_E4()


    return ReturnElmnt;
}