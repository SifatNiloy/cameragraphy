import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://cameragraphy-server.vercel.app/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return [products, setProducts];

};

export default useProducts;