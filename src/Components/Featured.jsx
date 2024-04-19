/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import React, { useState } from 'react'

function Featured() {


    const [isHoveredFyde, setIsHoveredFyde] = useState(false);
    const [isHoveredVise, setIsHoveredVise] = useState(false);

  return (
    <div className='w-full py-20'>

        <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
            <h1 className='text-8xl font-["Neue_Montreal"] tracking-tight'>Featured Project</h1>
        </div>

        <div className='px-20'>
            <div className='cards w-full flex gap-10 mt-10'>
            <div className='headings absolute bg-red-500'>
                <h1 className='absolute'></h1>
            </div>
                <div className='cardcontainer rounded-xl w-1/2 h-[75vh] relative' onMouseEnter={() => setIsHoveredFyde(true)} onMouseLeave={() => setIsHoveredFyde(false)} >
                <motion.h1 initial={{ y: "100%"}} animate={isHoveredFyde ? {y: "0"} : {y: "100%"} } style={{display: !isHoveredFyde ? 'none' : "", color : isHoveredFyde ? "" : "inherit"}} className='absolute left-full text-[#CDEA68] -translate-x-1/2 top-1/2 -translate-y-1/2 font-semibold z-[9] leading-none text-8xl tracking-tighter'>FYDE</motion.h1>
                    <div  className='w-full h-full rounded-xl overflow-hidden'>
                        <img className='card w-full h-full rounded-xl bg-green-600' src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png' alt='Image'/>
                    </div>
                </div>
                <div className='cardcontainer1 relative rounded-xl w-1/2 h-[75vh]' onMouseEnter={() => setIsHoveredVise(true)} onMouseLeave={() => setIsHoveredVise(false)} >
                <motion.h1 initial={{ y: "100%"}} animate={isHoveredVise ? {y: "0"} : {y: "100%"} } style={{display: !isHoveredVise ? 'none' : "", color : isHoveredVise ? "" : "inherit"}} className='absolute right-full text-[#CDEA68]  translate-x-1/2 top-1/2 -translate-y-1/2 font-semibold z-[9] leading-none text-8xl tracking-tighter'>VISE</motion.h1>
                    <div className='w-full h-full rounded-xl overflow-hidden'>
                        <img className='card w-full h-full rounded-xl bg-green-600' src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg' alt='Image'/>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Featured