import React from 'react'
import './Navbar.css'

const Navbar1 = () => {
  return (
    <div className='navbar'>
      <Link to="/" className="image-link">
        <img className="image" src={assets.logo} alt="" />
      </Link>
      <ul className="navbar-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Aboutus/Contact Us</Link>
        </li>
      </ul>
      
    </div>
  )
}

export default Navbar1
