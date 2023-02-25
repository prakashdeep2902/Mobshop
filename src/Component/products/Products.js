import React from 'react'
import Filtersection from '../FilterSection/Filtersection'
import Productlist from '../productList/Productlist'
import Sort from '../sort/Sort'
import './products.css'

const Products = () => {



  return (
    <div className='product_container'>

      <div className='filterSection'>
        <Filtersection />
      </div>

      <div className='product-view__short'>
        <Sort />
        <Productlist />
      </div>
    </div>
  )
}

export default Products
