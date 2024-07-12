import React from 'react'

const About = () => {
    const navigate=useNavigate();
    const goRoute=()=>{
        navigate("/");
        // navigate(-1)
    }
  return (
    <div className='container'>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, modi non, suscipit ducimus neque tenetur quam quidem nostrum doloribus cum unde quas illo reiciendis natus repudiandae recusandae numquam vitae nesciunt?</h1>
        <button className='btn btn-primary' onClick={goRoute}>Home</button>
    </div>

  )
}

export default About