import React from 'react'
import { useCartContext } from '../../context/cart_context'
import CartItem from '../cartitem/CartItem';
import './Cart.css'

const Cart = () => {

  const { cart } = useCartContext();

  return (
    <div className='cart_container'>
      <div className='cart_header'>
        <p>item</p>
        <p>price</p>
        <p>quantity</p>
        <p>subtotal</p>
        <p>remove</p>
      </div>
      <hr />
     

        <div className='cart_item'>
          {
            cart && cart.map((curElem) => {

              return <CartItem key={curElem.id} {...curElem} />
            })
          }
        </div>
        <hr />
      </div>

  
  )
}

export default Cart
