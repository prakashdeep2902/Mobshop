import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi';
import { CgMenu, CgClose } from 'react-icons/cg';
import './Navbar.css'
const Navbar = () => {

    const [MenuTcon, setMenuTcon] = useState(false)


    return (
        <div className="navbar">
            <ul className={MenuTcon===true?`activenavbar-list`:`navbar-list`}>
                <li>
                    <NavLink to='/' className='NavLink'>Home</NavLink>
                </li>
                <li>  <NavLink to='/about' className='NavLink' >About </NavLink></li>
                <li>   <NavLink to='/products' className='NavLink' > Products</NavLink></li>
                <li>  <NavLink to='/contact' className='NavLink' > Contact</NavLink></li>
                <div className='cart-item'>
                    <NavLink to='/cart' className='NavLink'>
                        <div className='carticonAndnumber'>
                            <span className='cart-total-item'>10</span>
                            <FiShoppingCart className='cart-trolly' />
                        </div>

                    </NavLink>
                </div>
                {/* two button for open and close menu */}


            </ul>
            <div className='mobile-navbar-button' >
                <CgMenu name='menu-outline' onClick={() => setMenuTcon(true)} className={MenuTcon===false?`menu-outline`:`activemenu-outline`} />
                <CgClose name='close-outline' onClick={() => setMenuTcon(false)} className={MenuTcon?`close-outline`:`activeclose-outline`}/>
            </div>



        </div>
    )
}

export default Navbar
