import logo from '../assets/logo.png'
import '../App.css'

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Company Logo" className="logo" />
      </div>
      <div className="heading">
        <h1>Nightescape</h1>
      </div>
      <div className="nav-links">
        <h4><a href="#home">Home</a></h4>
        <h4><a href="#about">About</a></h4>
        <h4><a href="#contact">Contact</a></h4>
      </div>
    </header>
  )
}

export default Navbar