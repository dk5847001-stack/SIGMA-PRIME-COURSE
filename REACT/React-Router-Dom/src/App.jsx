import { useState } from 'react'
import './App.css'
import StudentCard from './components/StudentCard'
import CompanyCard from './components/CompanyCard'
import {Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
      
    <Footer />
    </div>
  )
}

export default App
