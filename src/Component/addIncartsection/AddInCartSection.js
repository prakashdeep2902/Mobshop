import React, { useState } from 'react'
import './addincartsection.css'
import { FaCheck } from 'react-icons/fa';
import NumberOfStock from '../numberofproductinstock/NumberOfStock';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../../context/cart_context';
const AddInCartSection = ({ singleProduct }) => {

    const { AddToCart } = useCartContext()
    const { id, colors, stock } = singleProduct
    const [color, setColor] = useState(colors[0]);

    const [amount, setamount] = useState(1)
    const setDecrement = () => {

        amount > 1 ? setamount(amount - 1) : setamount(1)

    }
    const setIncrement = () => {

        amount < stock ? setamount(amount + 1) : setamount(stock);

    }

    return (
        <>
            <div className='colors'>
                <p>
                    Colors:
                    {

                        colors.map((curcolor, index) => {

                            return <div key={index} style={{ background: curcolor }} className={color === curcolor ? "color_flex active" : "color_flex"} onClick={() => setColor(curcolor)}  >
                                {color === curcolor ? <FaCheck style={{ color: 'white' }} /> : null}
                            </div>

                        })
                    }
                </p>

            </div>
            <NumberOfStock amount={amount} setDecrement={setDecrement} setIncrement={setIncrement} />
            <NavLink to="/cart" style={{ textDecoration: "none" }} onClick={() => AddToCart(id, color, amount, singleProduct)}>
                <button className='AddinCartButton'>
                    add in cart
                </button>

            </NavLink>

        </>

    )
}

export default AddInCartSection
