import React from 'react'
import { MdSecurity } from 'react-icons/md';
import { CiDeliveryTruck } from 'react-icons/ci';
import { GiReceiveMoney } from 'react-icons/gi';
import { RiSecurePaymentFill } from 'react-icons/ri';
import './services.css'
const Services = () => {
  return (
    <div className='service_container'>

      <div className='super_fast_delivery'>

        <div className='CiDeliveryTruck_div'>
          <CiDeliveryTruck className='CiDeliveryTruck' />
        </div>
        <h4>super fast and Free Delivery</h4>
      </div>
      <div className='NCS-MBG'>
        <div className='NCS'>
          <div className='MdSecurity-div'>
            <MdSecurity className='MdSecurity' />
          </div> 
          <h4>non-contact shipping</h4>
        </div>

        <div className='MBG'>
          <div className='GiReceiveMoney-div'>
            <GiReceiveMoney className='GiReceiveMoney' />
          </div>
          <h4>Mony-back Guaranteed</h4>
        </div>
      </div>
      <div className='SSPS'>

        <div className='RiSecurePaymentFill-div'>
          <RiSecurePaymentFill className='RiSecurePaymentFill' />
        </div>

        <h4>super secure payment system</h4>

      </div>
    </div>
  )
}

export default Services 
