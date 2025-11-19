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
import AdminLogin from '../pages/AdminLogin'
import AdminPrivateRoute from './AdminPrivateRoute'

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

                <Route path="/blogs/edit/:id" element={
                    <AdminPrivateRoute>
                        <EditBlogPage />
                    </AdminPrivateRoute>
                }
                />
                <Route path="/blogs/create"
                    element={
                        <AdminPrivateRoute>
                            <CreateBlogPage />
                        </AdminPrivateRoute>
                    }
                />



                <Route path="/admin-login" element={<AdminLogin />} />
            </Routes>
        </>
    )
}

export default AppRoutes
