import { useState } from 'react'
import Home from './components/Home'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import CreateAccount from './components/CreateAccount';
import { Routes, Route } from "react-router-dom";
import Login from './components/Login';

// import SideNavbar from './components/SideNavbar'

// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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
  )    </>
  )
}

export default App
