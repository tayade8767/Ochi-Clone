/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from 'react-icons/fa6';

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-2'>

        <div className='textstructure mt-52 px-20'>
            {["We Create","Eye-Opening","Presentations"].map((item,index) => {
               return (
                <div key={index} className='masker'>
                  <div className='w-fit flex items-center'>
                  { index === 1 && (<motion.div initial={{width: 0}} animate={{width:"9vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration: 0.8}} className='rounded-lg mr-[1vw] w-[9vw] h-[5.7vw] relative -top-[-1.5vw]'><img className='rounded-lg w-[9vw] h-[5.7vw]' src='https://th.bing.com/th/id/OIP.DFI4oh-Nb-91jQcsWbNPdAHaEK?rs=1&pid=ImgDetMain'/></motion.div>)}
                    <h1 className='pt-[2vw] -mb-[1vw] uppercase text-[9vw] leading-[6vw] font-["Founders_Grotesk_X-Condensed"] '>{item}</h1>
                  </div>
                </div>
               )
            })}
        </div>

        <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
            {["For public and private companies","From the first pitch to IPO"]
            .map((item,index) => {
                return <div key={index}><p className='text-md font-light tracking-tight leading-none'>{item}</p></div>
            })}
            <div className="start flex items-center gap-5">
                <div className='px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full'>
                   START THE PROJECT
                </div>
                <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full">
                    <span className="rotate-45">
                        <FaArrowUpLong />
                    </span>
                </div>
            </div>
        </div>

    </div>
  )
}

export default LandingPage;
