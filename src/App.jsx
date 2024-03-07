import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage';
import Marque from './Components/Marque';
import About from './Components/About';
import Featured from './Components/Featured';
import Eyes from './Components/Eyes';
import Cards from  './Components/Cards';
import Footer from  './Components/Footer';
import LocomotiveScroll from 'locomotive-scroll'
 


function App() {
 const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div >
     <Navbar/>
     <LandingPage/>
     <Marque/>
     <About/>
     <Eyes/>
   <Featured/>
   <Cards/>
   <Footer/>

    </div>
  )
}

export default App
