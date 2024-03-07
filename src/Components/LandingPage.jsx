import { motion } from "framer-motion"
import React from 'react';

function LandingPage() {

  return (
<div data-scroll data-scroll-section data-scroll-speed="-0.56" className='w-full h-[95vh] bg-zinc-900 text-gray-400 pt-2'>
    <div className='textStructure mt-32 '>
        {/* <div className='masker font-["kajiro"]'>
            <h1 className='Uppercase text-9xl px-20'>We Create</h1>
            </div>
            <div className='masker font-["kajiro"]'>
            <h1 className='Uppercase text-9xl px-20 '>EYE OPENING</h1>
            </div> 

            <div className='masker font-["kajiro"]'>
            <h1 className='Uppercase text-9xl px-20 '>PRESENTATION</h1>
            </div>  */}
            
            {["WE CREATE", "EYE OPENING", "PRESENTATIONS"].map((item, index)=>{
              return   <div className='masker font-["kajiro"]'>
              <h1 className='Uppercase text-9xl px-20 '>{item}</h1>
              </div> 
            })}
            
            <div className='border-t-[1px] border-zinc-800 mt-32 flex justify-center text-amber-50'>
        
            
            {["public and private comapenies", "From the first pitch to ipo"].map((item,index)=>{
               return <div className='w-full masker font-["Gilroy"] mt-4 px-11 text-lg'>
                <h1 className='UpperCase'>{item}</h1>
               </div>
               
            })}
        
        {/* <div className="start flex gap-5 justify-end items-center">
                     <div className='px-5 py-2 h-8   border-[1px] border-zinc-500 font-light  rounded-full text-sm'>start project</div>
                </div> */}
            </div>
          

            
            
</div>

    </div>
    
  )
}

export default LandingPage
