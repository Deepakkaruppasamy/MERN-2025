import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="link">Home</Link>
      <Link to="/about" className="link">About</Link>
      <Link to="/contact" className="link">Contact</Link>
      <Link to="/skills" className="link">Skills</Link>
      <Link to="/Login" className="link">Login</Link>
      <Link to ="/Child" className="link">Child</Link>
       <Link to ="/counter" className="link">Counter</Link>
       <Link to="/hooks" className="link">Hooks</Link>
       <Link to = "/todo" className = "link">Todo</Link>
    </div>
  )
}

export default Navbar
