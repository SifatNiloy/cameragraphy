import React, { useEffect, useState } from 'react';
import useProducts from '../../hooks/useProducts';
import Product from '../Home/Product';

const Explore = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://cameragraphy-server.vercel.app/explore')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    
    return (
        <div className='px-12 '>
            {/* <h2 className='text-5xl mb-10'>This is explore</h2> */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-12'>
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Explore;