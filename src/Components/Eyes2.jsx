/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { BsArrowUpRightCircle } from "react-icons/bs";
function Eyes2() {

  const [rotate,setrotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mousex = e.clientX;
      let mousey = e.clientY;

      let deltaX = mousex - window.innerWidth/2;
      let deltaY = mousey - window.innerHeight/2;

      var angle = Math.atan2( deltaY , deltaX) * (180/Math.PI);

      setrotate(angle-180);
      
    })
  });


  const [isHovered, setIsHovered] = useState(false);



  return (
    
    <>
    <div data-scroll data-section data-scroll-speed="-.3" className='w-full h-[60rem] pt-10 flex flex-col items-center bg-[#CDEA68]'>
        <div  className='relative h-[42rem]  w-2/3'>
            <div className='py-20'>
                <h1 className='text-[150px] leading-[10rem] text-[#212121] font-semibold px-72'>READY</h1>
                <h1 className='text-[150px] leading-[10rem] text-[#212121] font-semibold px-44'>TO START</h1>
                <h1 className='text-[150px] leading-[10rem] text-[#212121] font-semibold px-3'>THE PROJECT?</h1>
            </div>
            <div className='flex absolute gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                <div className='w-[12vw] flex h-[12vw] rounded-full items-center justify-center bg-zinc-100'>
                    <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                    <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                        <div className='w-8 h-8 rounded-full bg-zinc-100'></div>
                    </div>
                    </div>
                </div>
                <div className='w-[12vw] flex h-[12vw] rounded-full items-center justify-center bg-zinc-100'>
                    <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                    <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                        <div className='w-8 h-8 rounded-full bg-zinc-100'></div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div  className='items-center'>
            <button className='hover:bg-white hover:text-[#333] hover:border-[#ef3535] px-7 uppercase py-3 border flex items-center gap-6 bg-zinc-900 rounded-full text-white'>Read More
                <div style={{color : isHovered ? "red" : "inherit"}} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <BsArrowUpRightCircle size={28} /></div>
            </button>
            <h1 className='p-3  flex items-center pl-20 text-black'>OR</h1>
            <button className='hover:bg-white hover:text-[#333] hover:border-[#ef3535] px-7 uppercase py-3 border flex items-center gap-6 bg-zinc-900 rounded-full text-white'>Read More
                <div style={{color : isHovered ? "red" : "inherit"}} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <BsArrowUpRightCircle size={28} /></div>
            </button>
       </div>
    </div>

    

    </>


  )
}

export default Eyes2;