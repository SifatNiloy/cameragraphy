// Products.js
import React from 'react';
import useProducts from '../../hooks/useProducts';
import Product from './Product';

const Products = () => {
  const [products] = useProducts([]);

  return (
    <div className="container mx-auto mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
