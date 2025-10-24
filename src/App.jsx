import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import FooterSection from './components/footer/FooterSection'
import Pricing from './pages/Pricing'
import { Route, Routes } from 'react-router-dom'
import Company from './pages/Company'
import GetSupport from './pages/GetSupport'

function App() {
  return (
    <>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/company" element={<Company />} />
        <Route path="/get-support" element={<GetSupport />} />
      </Routes>
      
      <FooterSection />
    </>
  )
}

export default App
