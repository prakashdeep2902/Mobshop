import React from 'react'
import NumberOfStock from '../numberofproductinstock/NumberOfStock'
import './cartitem.css'
import { FaTrashAlt } from 'react-icons/fa';
import { useCartContext } from '../../context/cart_context';
const CartItem = ({ id, name, image, color, price, amount }) => {


     const {removeProduct}=useCartContext();  
    // const [amount, setamount] = useState(1)
    const setDecrement = () => {

        // amount > 1 ? setamount(amount - 1) : setamount(1)

    }
    const setIncrement = () => {

        // amount < stock ? setamount(amount + 1) : setamount(stock);

    }
    return (

        <>
            <div className='cart_item_container'>
                <div className='cart_image_name'>
                    <div className='leftside_image'>
                        <figure>
                            <img src={image} alt={id} />
                        </figure>
                    </div>
                    <div className='image_details'>
                        <p>{name}</p>
                        <div className='color-div'>
                            <p>color:</p>
                            <div className='color-style' style={{
                                backgroundColor: color
                            }}>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='price'>
                    <p>{Intl.NumberFormat('de-DE', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 }).format(price / 100)}</p>
                </div>

                <div className='quntity'>
                    <NumberOfStock amount={amount} setDecrement={setDecrement} setIncrement={setIncrement} />
                </div>

                <div className='subtotal'>
                    <p>{price * amount}</p>
                </div>
                <div className='remove'>
                    <FaTrashAlt  onClick={()=>removeProduct(id)}/>
                </div>
            </div>

          
        </>


    )
}

export default CartItem
