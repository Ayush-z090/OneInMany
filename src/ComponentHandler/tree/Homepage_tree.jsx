import { Hero,CTAButton,FeatureCard } from "../../Pages/HomePage/Component/Component";


let Object_tree = {
    P1_HM_S1_01 : {
        S_E1 : ()=> <Hero/>,
        S_E2 : ()=> 
        <>
        <FeatureCard title="Fast" desc="High performance and smooth experience." />
        <FeatureCard title="Secure" desc="Your data stays safe and protected." />
        <FeatureCard title="Smart" desc="AI-powered accuracy and efficiency." />
        </>,
        S_E3 : ()=> <CTAButton text="Get Started" />

    }
}

export default function HomepageTreeHandler({ Child_partID}){
    let ReturnElmnt;

    if (Child_partID === "S_E1") ReturnElmnt = Object_tree.P1_HM_S1_01.S_E1()

    else if (Child_partID === "S_E2") ReturnElmnt = Object_tree.P1_HM_S1_01.S_E2()

    else if (Child_partID === "S_E3") ReturnElmnt = Object_tree.P1_HM_S1_01.S_E3()

    else return ;

    return ReturnElmnt;

}