// animationUtils.js
 const slideFade = (time , condition,delay) => {
    return {
      initial: {
        opacity: condition ? 0 : 1,
        x: condition ? -100 : 0,
        rotate: 0,
      },
      animate: {
        opacity: condition ? 1 : 0,
        x: condition ? 0 : 100,
        rotate: 0,
        
        transition: {
          duration: time,
          delay:delay,
        //   ease: [0.25, 0.1, 0.25, 1], // Ease-in-out cubic
          type: 'spring',
          stiffness: 80,
          damping: 25,
          mass:7
          
        },
      },
    };};


function delayTimer(arr){
    let time = 0
    let Arr = arr.map(val=>{
      if (val){
        time+=0.3
        return time;
      }
      else return 0
    })
    return Arr
}
  

 export {slideFade,delayTimer}