import React from 'react';
const Review = ({ review }) => {

    return (
        <div className='grid justify-center items-center'>
            <div className="card w-96 bg-blue-100 shadow-xl mb-4">
                <div className="card-body">
                    <h2>Rating: {review.star} Star </h2>
                    <p>{review.review}</p>

                </div>
            </div>
        </div>
    );
};

export default Review;