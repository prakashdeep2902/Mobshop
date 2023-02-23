import { keyboard } from '@testing-library/user-event/dist/keyboard'
import React from 'react'
import { NavLink } from 'react-router-dom'
import './ListView.css'

const ListView = ({ filter_products }) => {

  const products = filter_products.Products

  return (

    <div className='container_listView'>
      {
        products && products.map((curElem ,index) => {

          const { id, name, image, price, description } = curElem
          return (
            <div className='box-productlist' key={index}>
              <figure>
                <img src={image} alt={name} />
              </figure>
              <div className='right_card_data'>
                <h3>{name}</h3>
                <h4>{Intl.NumberFormat('de-DE', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 }).format(price / 100)}</h4>
              
                <p>{description.slice(0, 99)}....</p>
                <NavLink to={`/Singleroduct/${id}`}>

                  <button>read more</button>
                </NavLink>
              </div>
            </div>
          )
        })

      }
    </div>

  )
}

export default ListView
