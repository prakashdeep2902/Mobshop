import React, { useContext } from 'react'
import productContext from '../../context/productContext'
import './featureproduct.css'
import Product from './product/Product'

const Featureproduct = () => {

    const context = useContext(productContext)
    const { isLoading, featureProducts } = context 

    if (isLoading) {

        return <div><h1>....loding</h1></div>
    } 
    return (
        <section>
            <div className='featureP_container'>
                <div className='intro-data'>Cheak Now!</div>
                <div className='common-heading'>Our Feature Services</div>
                <div className='items'>
                    {

                        featureProducts.map((curelem) => {
                            return <Product key={curelem.id} {...curelem} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Featureproduct
