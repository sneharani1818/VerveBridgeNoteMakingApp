// import React from 'react'
import { useEffect,useState } from 'react'
import logo from '../images/logo.svg'
import { NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";



const Navbar = () => {
    const [login, setLogin] = useState(false)
    const navigate = useNavigate();

    const logout = ()=>{
        localStorage.clear()
        navigate('/')
        window.location.reload(); 
    }

    useEffect(()=>{
        var token;
        token = localStorage.getItem("authtoken")
        if(token){
            setLogin(true)
        }
        else{
            setLogin(false)
        }
    }
    ,[])

    return (
        <div>
            
            <nav className="navbar navbar-dark bg-primary">
                <div className="container-fluid">
                    {login ? <NavLink className="navbar-brand" to="/dashboard">
                        <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                            Note Taking App
                    </NavLink>: <NavLink className="navbar-brand" to="/">
                        <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                            Note Taking App
                    </NavLink>}
                    <div className="d-flex ms-auto">
                        {/* <form className="d-flex me-3" role="search"> */}
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        {/* </form> */}
                        <ul className="nav justify-content-end">
                            {login == false && <li className="nav-item">
                                <NavLink className="nav-link text-light" aria-current="page" to="/login">Login</NavLink>
                            </li>}
                            {login == true && <li className="nav-item">
                                <NavLink className="nav-link text-light" aria-current="page" onClick={logout}>Logout</NavLink>
                            </li>}
                            <li className="nav-item">
                                <NavLink className="nav-link text-light" to="/createaccount">Create Account</NavLink>
                            </li>
                        </ul>
                    </div>
                    {/* <SideNavbar/> */}
                </div>
            </nav>
        </div>
    )
}

export default Navbar
