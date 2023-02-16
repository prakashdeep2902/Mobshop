import React from 'react'
import { NavLink } from "react-router-dom"
import './header.css'
import Navbar from './Navbar'
const Header = () => {
    return (
        <div className='header'>
            <NavLink to="/"  style={{textDecoration:"none"}}>
             
               <div className='icon'>
                <img src="./images/iconstore.png" alt=""  className='iconmobile'/>
                <img src="./images/icon.png" alt=""  className='iconname'/>
               </div>
            </NavLink>
            <Navbar/>
        </div>
    )
}

export default Header
