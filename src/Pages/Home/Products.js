import React from 'react';
import useProducts from '../../hooks/useProducts';
import Product from './Product';
import Loading from '../Shared/Loading';
import { useQuery } from 'react-query';

const Products = () => {
    // const [products, setProducts] = useProducts([]);
    // console.log(services);
    const { data: products, isLoading, refetch } = useQuery('reviews', () => fetch('https://cameragraphy-server.vercel.app/products').then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
           
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 mt-10'>
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
           </div>
        </div>
    );
};

export default Products;