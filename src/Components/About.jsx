import React from 'react'

const About = () => {
  return (
    <div className='w-full py-20 bg-[#CDEA68] text-5xl font-italic  '>
      <h1 className='mr-12 ml-12'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
    
    <div className='py- border-t-[1px] border-b-[1px] border-neutral-900 mt-14 flex justify-between items-center'>
     <div className='w-full  text-4xl font-semisolid  px-16 mt-8 mb-4'> What you can expect</div>
    <div className=' justify-end text-2xl mr-64 ml-11 mt-8 font-semisolid '>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.
    <h1 className='mt-4 mb-8'>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</h1>
   </div>

</div>
<div className='w-full flex justify-between mt-3'>
<div className='w-1/2 px-16 mt-16'>
{/* <h1 className='font-italic '>Our approach</h1> */}
Our Approch
<button className='bg-black  text-teal-100 px-6 py-3 flex gap-5 items-center justified-center text-lg mt-6 rounded-full'>READ MORE
    <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
    </button>
</div>
<div className='flex items-center'>
<div className='w-[40vw] h-[60vh]  mr-16 mt-16 flex justify-center bg-[url(https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg)] rounded-md'>

</div>

</div>
</div>
</div>


  )
}

export default About
