import { useContext } from "react";
import { Hero,CTAButton,FeatureCard } from "../../Pages/HomePage/Component/Component";
import { AppContext } from "../../App";


let Object_tree = {
        // P1 reprsent page1 , HM refers HOmepage ,S1 refers to section one and 0N (n -> 1,2,3...) represnt the elemnts

    P1_HM_S1 : {
        S_E1 : (time,delay)=> <Hero time={time}  delay={delay}/>,
        S_E2 : (time,delay)=> 
        <>
        <FeatureCard title="Fast" desc="High performance and smooth experience." time={time}  delay={delay}/>
        <FeatureCard title="Secure" desc="Your data stays safe and protected." time={time}  delay={delay}/>
        <FeatureCard title="Smart" desc="AI-powered accuracy and efficiency." time={time}  delay={delay}/>
        </>,
        S_E3 : (time,delay)=> <CTAButton text="Get Started" time={time}  delay={delay} />

    }
}

export default function HomepageTreeHandler({ Child_partID ,time, condition,delay}){


    
    let ReturnElmnt;

    if (Child_partID === "S_E1") ReturnElmnt = Object_tree.P1_HM_S1.S_E1(time,condition,delay)

    else if (Child_partID === "S_E2") ReturnElmnt = Object_tree.P1_HM_S1.S_E2(time,condition,delay)

    else if (Child_partID === "S_E3") ReturnElmnt = Object_tree.P1_HM_S1.S_E3(time,condition,delay)

    else return ;

    return ReturnElmnt;

}