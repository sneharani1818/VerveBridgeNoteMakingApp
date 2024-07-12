// import React, { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    

    const navigate = useNavigate();
    const handlechange = (e) => {
        if (e.target.name == 'email') {
            setEmail(e.target.value)
        }
        if (e.target.name == 'password') {
            setPassword(e.target.value)
        }
    };



    const handlelogin = async () => {
        const response = await fetch("http://localhost:3001/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        })
        const jsonconvertedresponse = await response.json()
        console.log(jsonconvertedresponse)
        if (jsonconvertedresponse.success === true) {
            localStorage.setItem("authtoken", jsonconvertedresponse.token)
            navigate("/dashboard");
            window.location.reload(); 
        }
    };

    console.log(email, password)

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">

                    <div className="mb-3">
                        <label htmlFor="inputEmail3" className="form-label">Email</label>
                        <input name='email' onChange={handlechange} type="email" className="form-control" id="inputEmail3" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPassword3" className="form-label">Password</label>
                        <input name='password' onChange={handlechange} type="password" className="form-control" id="inputPassword3" />
                    </div>
                    <div className="text-center">
                        <button type="submit" onClick={handlelogin} className="btn btn-primary">Sign in</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Login;
