import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Blogs from './Components/Blogs'
import Footer from './Components/Footer'
import Contacts from './Components/Contacts'

function App() {

  return (
    <>
    <Navbar/>
     <Home/>
     <About/>
      <Portfolio/>
      <Blogs/>  
      <Contacts/>
      <Footer/>
    </>
  )
}

export default App
