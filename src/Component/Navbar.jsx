import React, { useState } from 'react'
import './CSS/Navbar.css'

const Navbar = () => {

  const [menu,setMenu] = useState();

  return (
    <div className="navbar">
        <div className="navBarDiv">
            <div className="navLogo">
                <h1>.Logo</h1>
            </div>
            <div className="navMiddle">
                <ul className={menu ? "navMiddleListActive" :"navMiddleList" }>
                    <li className="navActiveOption">Your Concern</li>
                    <li>Our Professionals</li>
                    <li>Our Solutions</li>
                    <li>Wellbeing at Work</li>
                    <li>Locate Us</li>
                </ul>
            </div>
            <div className="navRight">
                <button id='signup'>sign up</button>
                <button id='login'>login</button>
                <div className="mobileMenu">
                    <i className={menu ? "dNone" :"fas fa-bars" } onClick={() => setMenu(true)}></i>
                    <i className={menu ? "fas fa-times" :"dNone" } onClick={() => setMenu(false)}></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar