/* eslint-disable no-unused-vars */
import React from 'react'
import NavBar from './Components/NavBar'
import LandingPage from './Components/LandingPage'
import Marque from './Components/Marque'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Featured from './Components/Featured'
import Cards from './Components/Cards'
import Eyes2 from './Components/Eyes2'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {


  const locomotiveScroll = new LocomotiveScroll();
  

  return (
    <div className='w-full bg-zinc-900 text-white min-h-screen'>

      <NavBar/>

      <LandingPage/>

      <Marque/>

      <About/>

      <Eyes/>

      <Featured/>

      <Cards/>

      <Eyes2/>

      <Footer/>

    </div>
  )
}

export default App