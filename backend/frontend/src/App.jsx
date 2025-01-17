import React from 'react'
// import { Toaster } from 'react-hot-toast';
import toast, { Toaster } from 'react-hot-toast';

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Toaster/>
    </>
  )
}

export default App
