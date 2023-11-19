import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Homepage from './pages/Homepage'
import About from './pages/About'
import DrillingAdditives from './pages/DrillingAdditives'
import IndustrialChemicals from './pages/IndustrialChemicals'
import AgroChemicals from './pages/AgroChemicals'
import Logictics from './pages/Logictics'
import Quality from './pages/Quality'
import Facilities from './pages/Facilities'
import QHSE from './pages/QHSE'
import Contact from './pages/Contact'

export default function App () {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/drillingAdditives' element={<DrillingAdditives />} />
        <Route path='/industrialChemicals' element={<IndustrialChemicals />} />
        <Route path='/agroChemicals' element={<AgroChemicals />} />
        <Route path='/logistics' element={<Logictics />} />
        <Route path='/quality' element={<Quality />} />
        <Route path='/facilities' element={<Facilities />} />
        <Route path='/QHSE' element={<QHSE />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
