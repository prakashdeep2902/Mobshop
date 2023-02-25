import React, { useContext, useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import productContext from '../../context/productContext';
import PageNav from '../pagenavigation/PageNav';
import './singlepage.css'

import { TbTruckDelivery } from 'react-icons/tb';
import { TbReplace } from 'react-icons/tb';
import Star from '../star/Star';
import AddInCartSection from '../addIncartsection/AddInCartSection';




const API = 'https://api.pujakaitem.com/api/products'


const Singleroduct = () => {

  const { id } = useParams();
  const context = useContext(productContext);
  const { isSingleLoading, singleProduct, getSingleProduct } = context
  const { id: alish, name, company, price, image = [{ url: "" }], description, stock, stars, reviews } = singleProduct
  let MRP = price + 200000


  useEffect(() => {

    getSingleProduct(`${API}?id=${id}`)
    // eslint-disable-next-line 
  },[])
  const [changeMainImg, setchangeMainImg] = useState(image[0])



  if (isSingleLoading) {

    <div>....loading</div>
  }
  return (
    <>
      <PageNav title={name} />

      <div className='singlepage_container'>

        <div className='product_detail'>

          <div className='image_detail'>

            <div className='small_image'>

              {
                image.map((element, index) => {

                  return (
                    <img src={element.url} alt={index} key={index} onClick={() => setchangeMainImg(element)} />

                  )
                })
              }
            </div>


            <div className='main_image'>
              <img src={changeMainImg.url} alt={changeMainImg.filename} />
            </div>
          </div>
          <div className='about_product'>
            <div className='name_of_product'>
              <h2>{name}</h2>
            </div>

            <div className='rating_product'>
              <Star stars={stars} reviews={reviews} />
            </div>
            <div className='MRP'>
              MRP :<del>{Intl.NumberFormat('de-DE', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 }).format(MRP / 100)}</del>
            </div>
            <div className='deal_of_the_day'>
              <p> deal of th day :{Intl.NumberFormat('de-DE', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 }).format(price / 100)}</p>
            </div>
            <div className='description_product'>
              <p>{description}</p>
            </div>
            <div className='added_benefits'>
              <div className='free_delevery'>
                <TbTruckDelivery />
              </div>
              <div className='replacement'>
                <TbReplace />
              </div>
              <div className='warranty'>
                2 year warranty
              </div>

            </div>
            <hr />
            <div className='inStocks'>
              avilable: <span>{stock > 0 ? "in stock" : "not In Stock"}</span>
            </div>
            <div className='id'>
              id:<span>{alish}</span>
            </div>
            <div className='brand'>
              brand: <span> {company}</span>
            </div>
            <hr />
             
             {
                  stock>0 && <AddInCartSection singleProduct={singleProduct}/>

             }
       

          </div>
        </div>

      </div>
    </>
  )
}

export default Singleroduct
