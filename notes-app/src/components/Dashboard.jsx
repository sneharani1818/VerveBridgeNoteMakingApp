import React from 'react'
import MainPage from './MainPage'
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar'

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/createaccount" element={<CreateAccount />} />
            </Routes>
            <MainPage />
        </div>
    )
}

export default Dashboard