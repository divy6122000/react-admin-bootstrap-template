import React, { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom"

const Dashboard = lazy(() => import("./pages/Dashboard"))
const ViewUsers = lazy(() => import("./pages/users/ViewUsers"))
const AddUser = lazy(() => import("./pages/users/AddUser"))
const Router = () => {
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/view-users' element={<ViewUsers />} />
                <Route path='/add-user' element={<AddUser />} />
            </Routes>
        </Suspense>
    )
}

export default Router