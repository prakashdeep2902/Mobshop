import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import productContext from '../context/productContext';
import PageNav from './pagenavigation/PageNav';

const API = 'https://api.pujakaitem.com/api/products'


const Singleroduct = () => {

  const { id } = useParams();

  const context = useContext(productContext);
  const { isSingleLoading, singleProduct, getSingleProduct } = context

  const { id: alish, name, company, price, colors, image, description, category, stock, stars, reviews } = singleProduct




  useEffect(() => {

    getSingleProduct(`${API}?id=${id}`)
  }, [])

  return (
    <>
      <PageNav title={name} />
    </>
  )
}

export default Singleroduct
