import React from 'react'
import './NumberOfstock.css'
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
const NumberOfStock = ({ amount, setDecrement, setIncrement }) => {
    return (
        <div className='numberOfStock'>
            <span> <AiOutlineMinus onClick={()=>setDecrement()} /></span>
            <p>{amount}</p>
            <span> <AiOutlinePlus onClick={()=>setIncrement()} /></span>


        </div>
    )
}

export default NumberOfStock
