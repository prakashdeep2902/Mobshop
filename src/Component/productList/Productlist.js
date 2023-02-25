import React from 'react'
import { useFilterContext } from '../../context/filter_context'
import GridView from '../gridview/GridView'
import ListView from '../listview/ListView'
const Productlist = () => {
  const { filter_products, grid_view } = useFilterContext()


  if (grid_view === true) { 
    return <GridView filter_products={filter_products} />
  }
  if (grid_view === false) {
    return <ListView filter_products={filter_products} />
  }
}

export default Productlist
