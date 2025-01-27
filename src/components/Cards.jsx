import React from 'react'

function Cards() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed=".1"  className='w-full h-full bg-zinc-100 flex items-center px-32 py-8 gap-5'>
            <div className='cardcontainer h-[50vh] w-1/2'>
            <div className='card relative flex items-center justify-center w-full rounded-xl h-full  bg-[#004D43]'>
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" className='w-32' alt="" />
            <button className='absolute left-10 bottom-3 px-5 py-3 border-2 rounded-full '>Copyright 2019-2025</button>
            </div>
            </div>
            <div className='cardcontainer flex gap-5 h-[50vh] w-1/2'>
            <div className='relative flex items-center justify-center card w-1/2 rounded-xl h-full  bg-[#004D43]'>
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" className='w-32' alt="" />
            <button className='absolute left-10 bottom-3 px-5 py-3 border-2 rounded-full '>Rating</button></div>
            <div className='relative flex items-center justify-center card w-1/2 rounded-xl h-full  bg-zinc-900'>
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" className='w-32' alt="" />
            <button className='absolute left-10 bottom-3 px-5 py-3 border-2 rounded-full '>Business</button></div>
            </div>
        </div>
    )
}

export default Cards