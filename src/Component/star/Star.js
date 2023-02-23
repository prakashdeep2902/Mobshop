import React from 'react'
import { FaStar } from 'react-icons/fa';
import { FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';
import './star.css'
const Star = ({ stars, reviews }) => {


    const ratingStar = Array.from({ length: 5 }, (elem, index) => {

        let number = index = index + 0.5;

        return (


            <span key={index}>
                {
                    stars >= index + 1 ? (<FaStar />) : stars >= number ? (<FaStarHalfAlt />) : (<AiOutlineStar />)
                }
            </span>

        )

    })
    return (
        <div className='rating_container'>
            <span>{ratingStar}</span>

            <p>({reviews} customers reviews)</p>
        </div>
    )
}

export default Star
