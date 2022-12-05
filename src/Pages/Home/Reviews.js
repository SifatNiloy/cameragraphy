import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Review from './Review';

const Reviews = () => {
    const { data: reviews, isLoading, refetch } = useQuery('reviews', () => fetch('http://localhost:5000/allreviews').then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }

       
    return (
        <div>
            <h2 className='text-5xl'>total reviews: {reviews.length}</h2>
            {
                reviews.map(review=> <Review review={review}></Review>)
            }
        </div>
    );
    
};

export default Reviews;