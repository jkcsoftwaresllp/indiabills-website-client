import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import FooterSection from './components/footer/FooterSection'
import Pricing from './pages/Pricing'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>

      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      
      <FooterSection />
    </>
  )
}

export default App
