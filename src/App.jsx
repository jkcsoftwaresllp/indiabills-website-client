import React from 'react'
import Navbar from './components/navbar/Navbar'
import FooterSection from './components/footer/FooterSection'
import AppRoutes from './routes/AppRoutes'
import ScrollToTop from './routes/ScrollToTop'

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <AppRoutes />

      <FooterSection />
    </>
  )
}

export default App
