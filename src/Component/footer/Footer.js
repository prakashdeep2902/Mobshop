import React from 'react'

import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { AiOutlineYoutube } from 'react-icons/ai';
import { NavLink } from 'react-router-dom'
import './footer.css'
const Footer = () => {
  return (

    <>
      <div className='outer-div'>

        <div className='interdiv1'>
          <div className='some_para'>
            <p>ready to get started? talk to us today </p>
          </div>
          <button>send</button>
        </div>
        <div className='innerdiv2'>
          <div className='div-inside'>

            <div className='about_user'>
              <h4>prakash deep sharma</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, neque.</p>
            </div>
            <div className='easy-sub'>
              <p>subscribe to get important update</p>
              <input type="text" placeholder='your email' />
              <button>subscribe</button>
            </div>
            <div className='follow_on_socail'>

              <span>follow us</span>
              <div className='social-media-icon'>

                <NavLink to='https://www.linkedin.com/in/pkdeep/'>
                  <div className='social'>
                    <BsLinkedin />
                  </div>
                </NavLink>
                <div className='social'>
                  <BsInstagram />
                </div>
                <NavLink to='https://www.youtube.com/watch?v=ls6WfZWOuS8&list=PLSaS10RABo5ElrebPnqM2XwxrT4vuj1CV'>
                  <div className='social'>
                    <AiOutlineYoutube />
                  </div>
                </NavLink>

              </div>

            </div>

            <div className='calluse'>
              <p>calluse</p>
              <span>+1234567912</span>
            </div>
          </div>


        </div>


      </div>
      <div className='bottom-footer'>
        <hr />
        <div className='container'>
          <p>@{new Date().getFullYear()}MobCub.All Rights Reserved</p>
        </div>

      </div>


    </>

  )
}

export default Footer
