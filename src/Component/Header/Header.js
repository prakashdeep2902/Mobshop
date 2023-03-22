import React from 'react'
import { NavLink } from "react-router-dom"
import { FiShoppingCart } from 'react-icons/fi';
import { useCartContext } from '../../context/cart_context';
import './header.css'

const Header = () => {
   
    const { totalItem } = useCartContext()
    return (
        <div className='header'> 
            <NavLink to="/">  

                <div className='icon'>
                    <img src="../images/iconstore.png" alt="" className='iconmobile' />
                    <img src="../images/icon.png" alt="" className='iconname' />
                </div>
            </NavLink>

            <div className="navbar">
                <ul className='navbar-list'>
                    <li>
                        <NavLink to='/' className='NavLink'>Home</NavLink>
                    </li>
                    <li>  <NavLink to='/about' className='NavLink' >About </NavLink></li>
                    <li>   <NavLink to='/products' className='NavLink' > Products</NavLink></li>
                    <li>  <NavLink to='/contact' className='NavLink' > Contact</NavLink></li>
                    <div className='cart-item'>
                        <NavLink to='/cart' className='NavLink'>
                            <div className='carticonAndnumber'>
                                <span className='cart-total-item'>{totalItem}</span>
                                <FiShoppingCart className='cart-trolly' />
                            </div>

                        </NavLink>
                    </div>



                </ul>
            </div>
        </div>
    )
}

export default Header 
