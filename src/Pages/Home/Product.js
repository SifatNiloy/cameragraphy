import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'
const Product = ({product}) => {
    const {_id, name,price, img, description}= product;
    const navigate = useNavigate();
    const navigateToPurchase = id => {
        navigate(`/product/${id}`)
    }
    return (
        // <div className="card w-96 shadow-xl  bg-blue-300">
        //     <figure className="px-4 pt-4">
        //         <img src={img} alt="Shoes" className="rounded-xl" />
        //     </figure>
        //     <div className="card-body items-center text-center">
        //         <h2 className="card-title">{name}</h2>
        //         <p className='text-black'>{description}</p>
        //         <h2 className='text-2xl text-orange-800'>Price: {price}</h2>
        //         <div className="card-actions">
        //             <button className="btn btn-primary" onClick={() => navigateToPurchase(_id)}>Buy Now</button>
        //         </div>
        //     </div>
        // </div>
        <div className="card card-compact w-70 bg-base-100 shadow-xl mt-12 mycard">
            <figure ><img src={img} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div >
                    <p className='font-bold text-blue-500'>Price : {price}</p>
                    <p>{description}</p>
                </div>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary" onClick={() => navigateToPurchase(_id)}>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;