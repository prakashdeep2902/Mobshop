import React from 'react'
import { NavLink } from 'react-router-dom';
import './Product.css'

const Product = (prop) => {

  const { id, name, image, price, category } = prop;
  return (
    <NavLink style={{textDecoration:"none"}} to={`/singleroduct/${id}`}>
      <div className="cart">
        <figure>
          <img src={image} alt={name} />
          <figcaption className='caption'>{category}</figcaption>
        </figure>

        <div className="card-data">
          <h3>{name}</h3>
          <h4>{Intl.NumberFormat('de-DE', { style: 'currency', currency: 'INR',maximumFractionDigits:2 }).format(price/100)}</h4>
        </div>
      </div>
    </NavLink>
  )
}

export default Product
