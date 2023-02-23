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

        <section className='product-view__short'>

            <div className='sort_filter'>
              <Sort/>
            </div>
            <div className='main__product'>
              <Productlist/>
            </div>
        </section>
    </div>
  )
}

export default Products
