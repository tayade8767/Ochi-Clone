/* eslint-disable no-unused-vars */
import React from 'react'
import { BsArrowUpRightCircle } from "react-icons/bs";
import { useState } from 'react';
function About() {

  const [isHovered, setIsHovered] = useState(false);




  return (
    <div className='text-black pl-12 w-full ps- py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl'>



        <h1 className='text-[4vw] leading-[4vw] tracking-tight no-underline hover:underline'>
            Ochi is a strategic partner for fast-grow­ing tech 
        </h1>
        <h1 className='text-[4vw] leading-[4vw] tracking-tight no-underline hover:underline'>
        businesses that need to raise funds, sell prod­ucts, 
        </h1>
        <h1 className='text-[4vw] leading-[4vw] tracking-tight no-underline hover:underline'>
        ex­plain com­plex ideas, and hire great peo­ple.
        </h1>   


        <div className='w-full -mb-10 flex gap-5 border-t-[1px] pt-10 mt-20 border-[#738146]'>
          
          <div className='w-1/2'>
            <h1 className='text-7xl'>Our Approach</h1>
            <button className='px-8 uppercase py-4 flex items-center gap-6 bg-zinc-900 mt-10 rounded-full text-white'>Read More
              <div style={{color : isHovered ? "red" : "inherit"}} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
              <BsArrowUpRightCircle size={28} /></div>
            </button>
          </div>
          <div className='w-1/2 h-[70vh] bg-[#b0c859] mr-12 -mt-2 rounded-3xl flex justify-center items-center'>
            <img className='rounded-[60px] p-10' src="src\images\Ochi Website.jpg" alt='Image' />
          </div>

            
        </div>
        


    </div>
  )
}

export default About;