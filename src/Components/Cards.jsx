import React from 'react'

function Cards() {
  return (
    <div>
      <div className='w-full h-[60vh]  bg-zinc-100 flex gap-5 mt-36'>
        <div className=' cardcontainer h-[50vh] w-1/2 '>
            <div className='card w-full h-full bg-zinc-800 rounded-md flex justify-center items-center'> 
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
             </div>
            </div>
            <div className='cardcontainer flex gap-5 w-1/2 h-[50vh]  '>
            <div className='card w-1/2 h-full bg-zinc-800 flex  justify-center items-center  rounded-md'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            </div>
            <div className='card w-1/2 h-full flex  bg-zinc-800 justify-center items-center rounded-md'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            </div>


            </div>


            

            </div>


      </div>
    
  )
}

export default Cards
