import React, { useState } from 'react';
import { useEffect } from 'react';
const Review = ({ review, refetch }) => {
    const [stars, setStars] = useState('');
    useEffect(() => {
        if (review.star === 5) {
            setStars('⭐⭐⭐⭐⭐')
        }
        else if(review.star===4) {
            setStars('⭐⭐⭐⭐')
        }
        else if(review.star===3) {
            setStars('⭐⭐⭐')
        }
        else if(review.star===2) {
            setStars('⭐⭐')
        }
        
        else if(review.star===1) {
            setStars('⭐')
        }
        else{
            setStars('no star')
        }
        
    })

    return (
        <div className='grid justify-center items-center'>
            <div className="card w-60 bg-red-100 shadow-xl mb-4 ">
                <div className="card-body">
                    <h1 className='text-2xl flex justify-center'>{stars} </h1>
                    <h3 className='text-lg text-blue-500 flex justify-center'>{review.review}</h3>

                </div>
            </div>
        </div>
    );
};

export default Review;