import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Pricing from '../pages/Pricing'
import Company from '../pages/Company'
import GetSupport from '../pages/GetSupport'
import Blogs from '../pages/Blogs'
import SingleBlogPage from '../pages/SingleBlogPage'
import EditBlogPage from '../pages/EditBlogPage'
import CreateBlogPage from '../pages/CreateBlogPage'

function AppRoutes() {
    return (
        <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/company" element={<Company />} />
            <Route path="/get-support" element={<GetSupport />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<SingleBlogPage />} />
            <Route path="/blogs/edit/:id" element={<EditBlogPage />} />
            <Route path="/blogs/create" element={<CreateBlogPage />} />
        </Routes>
        </>
    )
}

export default AppRoutes
