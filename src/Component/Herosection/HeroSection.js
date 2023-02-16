import React from 'react'
import './herosection.css'
import {NavLink} from 'react-router-dom'
const HeroSection = () => {
  return (
    <div className='container'>
        <div className='hero_detil'>
                <h1>Welcome to our store</h1>
                <p>Welcome to Mobcub,your one-stop destination for all your Phone shopping needs on the go! Shop the latest trends and must-haves from the comfort of your phone,anywhere, anytime, shop with ease on our platform.Discover a world of endless possibilities at your fingertips with our mobile e-commerce website
                </p>
                <NavLink>

                    <button>shop now</button>
                </NavLink>
        </div>
        <div className='hero_photo'>
        <img src="./images/herosection.png" alt="" />
        </div>
     
    </div>
  )
}

export default HeroSection
