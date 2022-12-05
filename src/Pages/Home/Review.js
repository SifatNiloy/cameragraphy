import React from 'react';

const Review = ({review}) => {
    return (
        <div className='grid justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Rating: {review.star}</h2>
                    <p>{review.review}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Review;