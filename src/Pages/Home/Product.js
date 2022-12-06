import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const {_id, name,price, img, description}= product;
    const navigate = useNavigate();
    const navigateToPurchase = id => {
        navigate(`/product/${id}`)
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl  bg-green-100">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <h2>Price: {price}</h2>
                <div className="card-actions">
                    <button className="btn btn-primary" onClick={() => navigateToPurchase(_id)}>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;