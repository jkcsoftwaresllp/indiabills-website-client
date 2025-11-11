import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import FooterSection from './components/footer/FooterSection'
import Pricing from './pages/Pricing'
import Company from './pages/Company'
import GetSupport from './pages/GetSupport'
import Blogs from './pages/Blogs'
import SingleBlogPage from './pages/SingleBlogPage'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <>

      <Navbar />

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/company" element={<Company />} />
        <Route path="/get-support" element={<GetSupport />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<SingleBlogPage />} />
      </Routes> */}
      <AppRoutes/>
      
      <FooterSection />
    </>
  )
}

export default App
