import React from 'react'
import Navbar from './components/navbar/Navbar'
import FooterSection from './components/footer/FooterSection'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <>
      <Navbar />

      <AppRoutes />

      <FooterSection />
    </>
  )
}

export default App
