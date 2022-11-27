import React from 'react';
import useProducts from '../../hooks/useProducts';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useProducts([]);
    // console.log(services);
    return (
        <div>
            <h2>This is products</h2>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
           </div>
        </div>
    );
};

export default Products;