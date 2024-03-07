import { motion } from "framer-motion";
import React , { useState } from "react";


function Featured() {
  const[isHovering, setHovering] = useState(false);

  const handleHover = ()=>{
    setHovering(true);
  }



  return (
    <>
    <div className='w-full py-20 bg-white'>
        <div className=' w-full text-6xl px-20 mt-16 border-b-[2px] border-zinc-300  pb-16'>Featured project
        </div>
      

    </div>
    <div className='px-20 py-12'>
    <div className='cards flex gap-16 w-full '>
        <div className=' w-1/2 h-[75vh] card bg-[url(https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png)] rounded-lg'>

        </div>
        <div className=' w-1/2 h-[75vh] card bg-[url(https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg)] rounded-lg'>

            </div>

        

    </div>
    
    </div>
    

    <div className=' h-[100vh] px-20 py-12'>
    <div className='cards flex gap-16 w-full '>
        <div className='w-1/2 h-[75vh] card bg-[url(https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png)] rounded-lg'>

        </div>
        <div className='w-1/2 h-[75vh] card bg-[url(https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg)] rounded-lg'>

            </div>
   

            </div>

        <div className='flex gap-8 w-full h-[10vh] mt-11 bg-white border-black'> 
    <button className='w-[10vw] h-11 rounded-full  text-lg text-zinc-500 border-red-500 '>BRAND-IDENTITY
        
    </button>
    <button className='w-[14vw] h-11 rounded-full text-lg text-zinc-500 '>DESIGN-RESEARCH</button>
      
    <button className='w-[10vw] h-12  rounded-full text-lg text-zinc-500 '>INVESTOR DECK</button>
            
      </div>
      <div className='w-full h-[20vh] flex  justify-center mt-8'>
     <button className=' flex justify-center items-center gap-3  w-60 h-12 bg-black rounded-full text-white'>
     View ALL CaseStudies
     <div className='w-2 h-2  bg-zinc-100 rounded-full'></div>
     </button>
      </div>
      

     
   </div>
    
    
    
    
    
   




   
   </>


  )
}

export default Featured
