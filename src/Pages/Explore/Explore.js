import React, { useEffect, useState } from 'react';
import useProducts from '../../hooks/useProducts';
import Product from '../Home/Product';

const Explore = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/explore')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    
    return (
        <div className='px-12'>
            <h2 className='text-5xl mb-10'>This is explore</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Explore;