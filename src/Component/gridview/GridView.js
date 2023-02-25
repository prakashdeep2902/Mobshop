import React from 'react'
import Product from '../Featureproduct/product/Product'
import './GridView.css'
const GridView = ({ filter_products }) => {
  const products = filter_products.Products

  return (


    <div className='containerAllproduct'>
      {
        products && products.map((currElem) => {

          return  <Product  key={currElem.id} {...currElem} />

        })
      }
    </div>

  )
}

export default GridView
