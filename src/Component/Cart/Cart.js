import React from 'react'
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../../context/cart_context'
import CartItem from '../cartitem/CartItem';
import './Cart.css'

const Cart = () => {



  const { cart, clearMyCart,  total_amount, shipping_fee } = useCartContext();

  if (cart.length === 0) {
    return <div style={{ display: "flex", justifyContent: "center", margin: '5rem 0 5rem 0', color: 'rgb(231, 86, 86)' }}>
      <h1>No Item is Avilable</h1>
    </div>
  }

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
      <div className='clearCart_and_cont_shop'>
        <NavLink to='/products'>
          <button>continue shopping</button>
        </NavLink>
        <button onClick={clearMyCart}>remove cart</button>

      </div>
      <div className='total_price'>
        <div className='sub_div_total_price'>
          <div className='subtotal'>
            <p>subtotal: {total_amount}</p>
          </div>
          <div className='shipping_fee'>
            <p>Shipping Fee: {shipping_fee}</p>
          </div>
          <hr className='subhr' />
          <div className='order_total'>
            <p>Order Total: {total_amount + shipping_fee}</p>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Cart
