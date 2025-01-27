import React from 'react'


// useEffect(()=>{
//  const [rotate,setRotate]=useState(0)
//     window.addEventListener("mousemove",(e)=>{
//        let mouseX =e.clientX;
//        let mouseY=e.clientY;

//        let deltaX=mouseX-window.innerWidth/2;
//        let deltaY=mouseX-window.innerHeight/2;
       
//        var angle=Math.atan2(y,x)*(180/Math.PI)
//     })
// })
const Eyes = () => {
  return (
    <div data-scroll  data-scroll-section data-scroll-speed=".9" className='eyes w-full h-screen overflow-hidden '>
<div className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
<div className='absolute w-1/2 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] items-center justify-center flex gap-10'>
<div className='flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full '>
    <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
    <div  className='line w-full h-10 absolute w-1/2 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-center '>
    <div className=' w-10 h-10 rounded-full bg-zinc-100 '></div>
    Play
    </div>

    </div>
</div>
<div className='flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full '>
<div className='relative justify-center w-2/3 h-2/3 rounded-full bg-zinc-900'>
<div className='line w-full h-10 absolute w-1/2 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-center'>
    <div className='w-10 h-10 rounded-full bg-zinc-100 ' ></div>
    Play
    </div>

</div>
</div>
</div>
</div>
    </div>
  )
}

export default Eyes