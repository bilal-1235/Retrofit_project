import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Component/Navbar'
import Herosection from './Component/Herosection'
import TrustBar from './Component/TrustBar'
import Howitsworks from './Component/Howitsworks'
import Services from './Component/Services'
import Testimonials from './Component/Testimonials'
function App() {

  return (
    <>
    <Navbar/>
    <Herosection/>
    <TrustBar/>
    <Howitsworks/>
    <Services/>
    <Testimonials/>

    
    
    </>
  )
}

export default App
