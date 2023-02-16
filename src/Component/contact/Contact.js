import React from 'react'

import './contact.css'
const Contact = () => {
  return (
    <div>
     
      <h2 className='comoon-heading'>make Contact with us</h2>

   
      <iframe title='myFram'  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.9242098450604!2d78.33335541530892!3d17.511131003832592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9281c600a3ed%3A0x1171d3ad0e44ed2!2sJanapriya%20NileValley!5e0!3m2!1sen!2sin!4v1676204980343!5m2!1sen!2sin"
        width="100%"
        height="350rem"
        style={{ border: 0 }}
        llowfullscreen=""
        loading="lazy"
        
        referrerpolicy="no-referrer-when-downgrade">

      </iframe>
        {/* { eslint-disable-next-line} */}

      <div className='container'>
        <div className='contact-form'>
          <form action="https://formspree.io/f/xgebangy" method='POST' className='from'>
            <input
              type="text"
              name="username"
              id="username" placeholder='username'
              required autoComplete='off' />
            <input
              type="email"
              name="Email"
              id="Email"
              placeholder='Email'
              required
              autoComplete='off' />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              required autoComplete='off'
              placeholder='you can write message'
            ></textarea>

            <input type="submit" name='submit' id='submit'  />
          </form>
        </div>
      </div>

    </div>
  )
}

export default Contact
