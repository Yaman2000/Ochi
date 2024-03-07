import React from 'react'
import {motion} from "framer-motion";

function Marque() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.004" className='w-full py-8 bg-green-900 text-lime-100 rounded-md'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex  overflow-hidden whitespace-nowrap pr-20'>
       
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration:8}} className="text-[17vw] leading-none font-['italic'] font-light">we are ochi</motion.h1>
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration:8}} className="text-[17vw] leading-none font-['italic'] font-light">we are ochi</motion.h1>
        <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration:8}} className="text-[17vw] leading-none font-['italic'] font-light">we are ochi</motion.h1>

        </div>
       
      
    </div>
  )
}

export default Marque
