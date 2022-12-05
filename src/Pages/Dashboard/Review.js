import React from 'react';
import { useState } from 'react';

const Review = () => {
    const [star, setStar]= useState(0);
    const starValue=()=>{
        console.log('changed star');
        var x = document.getElementsByName('rating-4');

        for (var i = 0; i < x.length; i++) {
            if (x[i].checked)
                // console.log(i+1);
                var rating=i+1;
                setStar(rating);
        }
        
    }
    console.log(star);
    return (
        <div className='flex justify-center'>
            <h1>Review</h1>
            <div>
                <div onChange={starValue} className="rating rating-lg">
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                </div>
            </div>
        </div>
    );
};

export default Review;