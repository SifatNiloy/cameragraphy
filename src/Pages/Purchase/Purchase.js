import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { productId } = useParams();
    const [purchase, setPurchase]= useState({});
    useEffect(()=>{
        fetch(`http://localhost:5000/product/${productId}`)
            .then(res => res.json())
            .then(data => setPurchase(data));
    })
    const handlePurchase = event => {
        event.preventDefault();

        // event.target.reset();
    }

    return (
        <div>
            <h2 className='text-3xl'>This is Purchase page : {productId}</h2>
            <div className='flex justify-center'>
                <img  src={purchase.img} alt="" />
            </div>
            <form onSubmit={handlePurchase} className='grid grid-cols-1 justify-items-center my-12'>
                <input type="text" value={purchase.name} disabled class="input input-bordered w-full max-w-xs my-3" />
                <input type="text" value={purchase.price} disabled class="input input-bordered w-full max-w-xs my-3" />
                <input type="email" name='email' placeholder="Email" class="input input-bordered w-full max-w-xs my-3" />
                <input type="text" name='phone' placeholder="Phone number" class="input input-bordered w-full max-w-xs my-3" />
                <input type="text" name='address' placeholder="Address" class="input input-bordered w-full max-w-xs my-3" />
                <input type="submit" value="Place Order" class="btn btn-accent w-full max-w-xs" />
            </form>
        </div>
    );
};

export default Purchase;