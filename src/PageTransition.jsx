import React, { useContext, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useLocation, useNavigate } from "react-router-dom";
import { path, svg } from "framer-motion/client";
import { duration } from "@mui/material";
import { AppContext } from "./App";
import navigater from "./JS_Scrips/Navigater";
const PageTransition = ({timeline}) => {
  const pageTransitionRef = useRef(null);
  const logoRef = useRef(null)
  let navigate = useNavigate();
  let {ParentID} = useContext(AppContext);
  // diplay to initial
  //  pageTransitionRef.current.style.display = "initial"

  useLayoutEffect(() => {
    if (!pageTransitionRef.current || !logoRef.current) return;

    const svgPaths = logoRef.current.querySelectorAll("path");
    const container = pageTransitionRef.current;
  
    // make SVG invisible initially
    svgPaths.forEach(path => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
    });
  

    // create boxes
    if (Array.from(container.children).length === 1) {
      for (let i = 0; i < 15; i++) {
        const box = document.createElement("div");
        box.className = "w-[calc(100vw/15)] h-full bg-text-01 will-change-transform";
        container.appendChild(box);
      }
    }
  
    const boxes = Array.from(container.children);
    gsap.set(boxes, { scaleX: 0, transformOrigin: "left" });
    gsap.set(container,
      {
        zIndex:10
      }
    )
    gsap.set(svgPaths,{
      strokeDashoffset: (i, path) => path.getTotalLength(),
      opacity:1
    })
    const tl = gsap.timeline();
  
    // Step 1: expand boxes
    tl.to(boxes, {
      scaleX: 1,
      duration: 0.5,
      stagger: 0.08,
      ease: "power2.out",
    })
  
    // Step 2: draw SVG (make visible)
    .to(svgPaths, {
      strokeDashoffset: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.05,
      onComplete:()=>{
        navigater(ParentID,navigate)    
    }
    })
  
    // Step 3: hide SVG again
    .to(svgPaths, {
      strokeDashoffset: (i, path) => path.getTotalLength(),
      duration: 1,
      ease: "power1.inOut",
      
    })

    .to(boxes.reverse(), {
      scaleX: 0,
      duration: 0.5,
      stagger: 0.08,
      ease: "power2.out",
     onComplete:()=> container.style.zIndex = "-6"

    })
  
    return () => tl.kill();
  }, [ParentID]);
  

  return (
    <div
      ref={pageTransitionRef}
      className="fixed top-0 left-0 w-full h-dvh z-50 flex "
    >

      <MySvgIcon ref={logoRef}/>

    </div>
  );
};

const MySvgIcon = React.forwardRef(function MySvgIcon(_props, ref) {
  return (
<svg
  ref={ref}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 123.09 123"
  className="w-[10rem] h-[10rem] stroke-black fill-none absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
>
  <g strokeLinecap="round" strokeMiterlimit="10">
    <path
      className="[stroke-linecap:butt] stoke"
      strokeWidth="4"
      d="M55 29.48 74.5 10a27.42 27.42 0 0 1 38.63 0h0a27.39 27.39 0 0 1 0 38.62L88.66 73A27.41 27.41 0 0 1 50 73h0a27.05 27.05 0 0 1-6.77-11.26c-.2-.66-.37-1.32-.52-2"
    />
    <path
      className="[stroke-linecap:butt]"
      strokeWidth="4"
      d="m67.77 94-19.1 19A27.49 27.49 0 0 1 10 113h0a27.35 27.35 0 0 1 0-38.62L34.48 50a27.49 27.49 0 0 1 38.69 0h0a27.09 27.09 0 0 1 7.24 12.95"
    />
    <path
      className="[stroke-linecap:butt]"
      strokeWidth="2"
      d="M106.78 22.24a17.06 17.06 0 0 0-15.2-8.74M15.58 92.5c0 9 7.61 16 17 16"
    />
    <circle cx="109.58" cy="28.5" r="1" fill="#333" />
  </g>
</svg>
  );
});


export default PageTransition;
