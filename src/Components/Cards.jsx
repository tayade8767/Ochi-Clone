/* eslint-disable no-unused-vars */
import React from 'react'
import {im } from "../images/im"

function Cards() {

   const calltobusinessbutton = () => {

    };

  return (
    <div data-scroll data-section data-scroll-speed="-.4" className='w-full h-screen flex gap-5 overflow-auto items-center px-20'>

        <div className='cardcontainer h-[50vh] w-1/2'>
            <div className=' relative card rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'>
                <img src={im.logo001} alt='Logo 1'/>
                <button className='absolute left-8 bottom-8 p-1 px-3 border border-[#CCEA68] rounded-3xl text-[#CCEA68]'>@2023-2024</button>
            </div>
        </div>

        <div className='cardcontainer flex gap-5 h-[50vh] w-1/2'>
            <div className='card relative rounded-xl w-1/2 h-full bg-[#212121] flex items-center justify-center'>
                <img src={im.logo002} alt='logo 2'/>
                <button className='hover:bg-white hover:text-[#333] hover:border-[#ef3535] absolute left-8 bottom-8 p-1 px-3 border border-[#DADADA] rounded-3xl text-[#DADADA]'>RATING 5.0 ON CLUTCH</button>
            </div>
            <div className='card relative rounded-xl w-1/2 h-full bg-[#212121] flex items-center justify-center'>
                <img src={im.logo003} alt='logo 3' className='size-[7rem]'/>
                <button className='hover:bg-white hover:text-[#333] hover:border-[#ef3535] absolute left-8 bottom-8 p-1 px-3 border border-[#DADADA] rounded-3xl text-[#DADADA]'>BUSINESS BOOTSTRAP ALUMNI</button>
            </div>
        </div>

    </div>
  )
}

export default Cards;