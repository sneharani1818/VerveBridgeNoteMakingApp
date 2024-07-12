import { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import SideNavbar from './components/SideNavbar'
import AllUserNotes from './components/allUserNotes';
// import Dashboard from './components/Dashboard';


const router = createBrowserRouter([
    {
        path: "/",
        element: <><Navbar/><Intro/></>,
    },
    {
        path: "/login",
        element:<><Navbar/><Login/></>,
    },
    {
        path: "/createaccount",
        element:<><Navbar/><CreateAccount/></>,
    },
    {
        path:"/dashboard",
        element:<><Navbar/><SideNavbar/></>
    },
    {
        path:"/usernotes",
        element:<><Navbar/><AllUserNotes/></>
    }
]);


const App = () => {
  const [login, setLogin] = useState(false)


  useEffect(()=>{
        var token;
        token = localStorage.getItem("authtoken")
        if(token){
            setLogin(true)
            // window.location.reload('/dashboard');
            
        }
        else{
            setLogin(false)
        }
        console.log(login)
    },[])
  return (    
    <RouterProvider login={login} router={router} />
  )
}

export default App