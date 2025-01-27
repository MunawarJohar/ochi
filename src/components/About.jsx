import React from 'react'

const About = () => {
  return (
    <div className='w-full py-20 px-20 text-black bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl'>
        <h1 className=' font-["Neue_Montreal"] text-6xl leading-[3.5vw] tracking-tight '>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
   
   <div className='w-full flex mt-20 pt-10 border-t-[1px] border-black'>
    <div className='w-1/2'> 
    <h1 className='text-7xl'>Our Approach</h1>
    <button className='flex gap-5 items-center px-10 py-6 mt-10 bg-zinc-900 rounded-full text-white uppercase'> Read More
        <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
    </button>
    </div>
    <div className='w-1/2 h-[60vh] bg-red-500 rounded-3xl '>
<img className='w-fit rounded-3xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
    </div>
   </div>
    </div>
  )
}

export default About