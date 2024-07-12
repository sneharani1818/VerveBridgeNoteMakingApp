import React from 'react'
import Navbar from './Navbar'
import Intro from './Intro'
import { Routes, Route } from "react-router-dom";
import Login from './Login';
import CreateAccount from './CreateAccount';


const Home = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/createaccount" element={<CreateAccount />}/>
      </Routes>
      <Intro />
    </div>
  )
}

export default Home