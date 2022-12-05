import React from 'react';
import { useState } from 'react';
import { json } from 'react-router-dom';
import './Review.css'

const Review = () => {

    const [star, setStar] = useState(5);
    const starValue = () => {
        console.log('changed star');
        var x = document.getElementsByName('rating-4');

        for (var i = 0; i < x.length; i++) {
            if (x[i].checked)
                // console.log(i+1);
                var rating = i + 1;
            setStar(rating);
        }

    }
    console.log(star);
    const onSubmit = async data => {
        console.log(data)

        const url = ``;
        fetch(url,)
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    console.log(result);
                    const img = result.data.url;

                    const newProduct = {
                        name: data.name,
                        price: data.price,
                        description: data.description,
                        img: img
                    }
                    console.log(newProduct)
                    //sending to database
                    fetch(`http://localhost:5000/newProduct`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',

                        },
                        body: JSON.stringify(newProduct)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            console.log(inserted)
                        })
                }

            })

    };
    const handleAddReview=event=>{
        event.preventDefault();
        const review= event.target.review.value;
        const userReview={star, review};
        console.log(userReview)
        //post review to server
        fetch(`http://localhost:5000/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                
            },
            body: JSON.stringify(userReview)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    

    }

    return (
        <div className='grid justify-center'>
            <h1 className='text-lg'>Select Star</h1>
            <div>
                <div onChange={starValue} className="rating rating-lg mb-6">
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                </div>

                

                <form className='grid items-center' onSubmit={handleAddReview} >
                    
                    <input type="text" className='review-text' name="review" id="" placeholder='write your review' />
                    <input type="submit" className='btn' value="Add Review"  />
                </form>



            </div>
        </div>
    );
};

export default Review;