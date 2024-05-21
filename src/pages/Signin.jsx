import React, { useState } from 'react'
import './Signin.css'
import email_icon from "../assets/email.png"
import password_icon from "../assets/password.png"
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer'

const Signin = () => {
    const[action,setAction]=useState("Login")
  return (
    <>
    <Navbar/>
    <div className='container'>
      <div className="head">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        
        
        <div className="input">
          <img src={email_icon} alt=""/>
          <input type="email" placeholder="Email Id"/>
        </div>
        <div className="input">
          <img src={password_icon}alt=""/>
          <input type="password" placeholder="password"/>
        </div>
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password?<span>Click Here</span></div>}
      
      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>
     
    </div>
    <Footer/>
    </>
  )
}

export default Signin
