import React from 'react';
import useProducts from '../../hooks/useProducts';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useProducts([]);
    // console.log(services);
    return (
        <div>
            <h2>This is products</h2>
            {
                products.map(product=> <Product product={product}></Product>)
            }
        </div>
    );
};

export default Products;