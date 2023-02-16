import React from 'react'
import { NavLink } from 'react-router-dom'
import './pageNav.css'
const PageNav = ({ title }) => {

  
    return (
        <div className='PageNav_container' >
            <NavLink className='NavLink' to='/' style={{textDecoration:"none"}}>Home</NavLink>/{title}
        </div>
    )
}

export default PageNav
