import React from 'react'
import {motion} from 'framer-motion'
function Marqee() {
  return (
    <div data-scroll  data-scroll-section data-scroll-speed=".1" className='w-full rounded-tl-3xl rounded-tr-3xl  py-10 bg-[#004D43]  '>
<div className="text border-t-1 border-b-1 border-zinc-300 flex  rounded-3xl overflow-hidden whitespace-nowrap">
  <motion.h1 
    initial={{ x: 0 }} 
    animate={{ x: "-100%" }} 
    transition={{ ease: "linear", repeat: Infinity, duration: 5 }} 
    className="text-[15vw] leading-none font-['Founders_Grotesk'] font-semibold uppercase pt-10 pr-20">
    We are Ochi
  </motion.h1>
  <motion.h1 
    initial={{ x: 0 }} 
    animate={{ x: "-100%" }} 
    transition={{ ease: "linear", repeat: Infinity, duration: 5 }} 
    className="text-[15vw] leading-none font-['Founders_Grotesk'] font-semibold uppercase pt-10">
    We are Ochi
  </motion.h1>
</div>

    </div>
  )
}

export default Marqee