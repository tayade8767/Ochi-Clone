/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import {im } from "../images/im"

function Eyes() {

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
  })


  return (
    <div className='eyes w-full h-screen overflow-hidden'>
      <div data-scroll data-section data-scroll-speed="-.7" className='relative w-full h-full bg-cover bg-center' style={{ backgroundImage: `url(${im.Websitebackground})` }}>
        <div className='flex absolute gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
          <div className='w-[15vw] flex h-[15vw] rounded-full items-center justify-center bg-zinc-100'>
            <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
              <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                <div className='w-8 h-8 rounded-full bg-zinc-100'></div>
              </div>
            </div>
          </div>
          <div className='w-[15vw] flex h-[15vw] rounded-full items-center justify-center bg-zinc-100'>
            <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
              <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                <div className='w-8 h-8 rounded-full bg-zinc-100'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Eyes;