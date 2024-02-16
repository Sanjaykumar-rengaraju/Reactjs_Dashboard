import React from 'react'
import Particle from './components/Particle'
import NavBar from './components/Navbar'
import DashBoard from './components/Dashboard'
import { BrowserRouter } from 'react-router-dom'
import Marquee from './components/Marquee'
import Events from './components/Events'
import Objective from './components/Objective'
import Footer  from './components/Footer'

function App() {
  return (
    <>
    <Particle/>
    <NavBar/>
    <BrowserRouter>
    <DashBoard/>
    </BrowserRouter>
    
    <Events/>
    <Objective/>
    <BrowserRouter>
    <Footer/>
    </BrowserRouter>
    </>
  )
}



export default App;