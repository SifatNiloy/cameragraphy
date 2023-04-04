import React from 'react';
import useProducts from '../../hooks/useProducts';
import Product from './Product';


const Products = () => {
    const [products, setProducts] = useProducts([]);
    // console.log(services);

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