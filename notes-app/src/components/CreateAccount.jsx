import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
    const [email ,setEmail] = useState('')
    const [username ,setUsername] = useState('')
    const [contact ,setContact] = useState('')
    const [password ,setPassword] = useState('')
    const [accreated, setAccreated] = useState(false)
    const navigate = useNavigate();
    

    const handlechange = (e)=>{
        if(e.target.name == 'email' ){
            setEmail(e.target.value)
        }
        if(e.target.name == 'password' ){
            setPassword(e.target.value)
        }
        if(e.target.name == 'username' ){
            setUsername(e.target.value)
        }
        if(e.target.name == 'contact' ){
            setContact(e.target.value)
        }
        // console.log(email,password,username, contact)
    }

    const adduser =  async()=>{
        const response = await fetch ("http://localhost:3001", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email,password,username,contact }),
      })
      const jsonconvertedresponse = await response.json()
      console.log (jsonconvertedresponse)
      if(jsonconvertedresponse.success === true){
        setAccreated(true)
        setTimeout(()=>{
            navigate("/login");
        },3000)

      }

    };
        
    

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">

                    {accreated ? <div>Account Created Successfully...</div> : null}
                    
                        <div className="mb-3">
                            <label htmlFor="inputEmail3" className="form-label">Email</label>
                            <input onChange={handlechange} name='email' type="email" className="form-control" id="inputEmail" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputEmail3" className="form-label">Username (can`t be your email)</label>
                            <input onChange={handlechange} type="text" name='username' className="form-control" id="inputUsername" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputEmail3" className="form-label">Contact Number</label>
                            <input type="number" onChange={handlechange} name='contact' className="form-control" id="inputContact" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputPassword3" className="form-label">Password</label>
                            <input type="password" name='password' onChange={handlechange} className="form-control" id="inputPassword" />
                        </div>
                        <div className="text-center">
                            <button type="submit" onClick={adduser} className="btn btn-primary">Create Account</button>
                        </div>
                    
                </div>
            </div>
        </div>
    )
}

export default CreateAccount