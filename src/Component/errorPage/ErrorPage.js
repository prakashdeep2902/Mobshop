import React from 'react'
import { NavLink } from 'react-router-dom'
import './erropage.css'
const ErrorPage = () => {
  return (
    <div className='container_error_page'>
      <h1>404</h1>
      <h2>UH OH ! You're Lost .</h2>
      <p>the page you are looking for does not exist but you can click the button below to go back to home page</p>
      <NavLink to='/'>
        <button>Home</button>
      </NavLink>

    </div>
  )
}

export default ErrorPage
