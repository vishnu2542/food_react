import React from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleCart }) => {
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
          <Link to="/contact">About Us/Contact Us</Link>
        </li>
      </ul>
      <div className="navbar-right">
        
        <img  className='aa' src={assets.basket_icon} alt="" onClick={toggleCart} />
        <div className="dot"></div>
        
      </div>
    </div>
  );
};

export default Navbar;
