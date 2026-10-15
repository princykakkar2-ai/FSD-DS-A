import './App.css'
import React from 'react'
function App() {
  const [formData,setFormData]=useState({name:"",email:"",password:""});

  return (
<div>
  <form action="">
    <input type="text" placeholder='Enter your name' value={} onChange={}/>
    <br></br>
    <input type="email" placeholder='Enter your email' value={} onChange={}/>
    <br></br>
    <input type="password" placeholder='Enter your password' value={} onChange={}/>
    <br></br>
    <button type="submit">Registration</button>
    
  </form>
</div>
  )
}

export default App
