import React from 'react';

const Review = () => {
    return (
        <div className='flex justify-center'>
            <h1>Review</h1>
            <div>
                <div class="rating">
                    <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" checked />
                    <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
                </div>
            </div>
        </div>
    );
};

export default Review;