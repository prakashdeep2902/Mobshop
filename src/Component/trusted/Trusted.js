import React from 'react'
import './trusted.css'
import { BsGoogle } from 'react-icons/bs';
import { FaAws } from 'react-icons/fa';
import { SiSamsung } from 'react-icons/si';
import { AiFillApple } from 'react-icons/ai';
import { SiXiaomi } from 'react-icons/si';
const Trusted = () => {
  return (
    <div className='trusted-container'>
      <div className='trusted-heading'>
        <p>trusted by big tech giants 1000+ company</p>
      </div>
      <div className='componey-name'>
        <div className='componey'>
          <BsGoogle className='componey-logo' />
          <span>google</span>
        </div>
        <div className='componey'>
          <FaAws className='componey-logo' />
          <span>aws</span>
        </div>
        <div className='componey' >
          <SiSamsung  className='componey-logo'/>
          <span>samsung</span>
        </div>
        <div className='componey'> 
         <AiFillApple className='componey-logo'/>
         <span>apple</span>
        </div>
        <div className='componey'>
       <SiXiaomi className='componey-logo'/>
       <span>xiaomi</span>

        </div>
      </div>
    </div>
  )
}

export default Trusted
