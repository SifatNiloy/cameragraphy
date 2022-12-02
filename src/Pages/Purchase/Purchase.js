import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Purchase = () => {
    const { productId } = useParams();
    const [purchase, setPurchase]= useState({});
    const [user, loading, error] = useAuthState(auth);
    useEffect(()=>{
        fetch(`http://localhost:5000/product/${productId}`)
            .then(res => res.json())
            .then(data => setPurchase(data));
    })
    const handlePurchase = event => {
        event.preventDefault();
        // console.log(purchase.name, purchase.price,user.displayName, event.target.phone.value, event.target.address.value)
        const purchased = {
            name: purchase.name,
            price: purchase.price,
            email: user.email,
            phone: event.target.phone.value,
            address: event.target.address.value,

        }
        fetch('http://localhost:5000/purchased', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchased)
        })
        .then(res=> res.json())
        .then(data=> console.log(data))
        event.target.reset();
    }

    return (
        <div>
            <h2 className='text-3xl flex justify-center'>Confirm Purchase Product </h2>
            <div className='flex justify-center'>                
                <img src={purchase.img} alt="" />
            </div>
            <form onSubmit={handlePurchase} className='grid grid-cols-1 justify-items-center my-12'>
                <input type="text" value={purchase.name} disabled className="input input-bordered w-full max-w-xs my-3" />
                <input type="text" value={purchase.price} disabled className="input input-bordered w-full max-w-xs my-3" />
                <input type="email" value={user.email} className="input input-bordered w-full max-w-xs my-3" />
                <input type="text" name='phone' placeholder="Phone number" className="input input-bordered w-full max-w-xs my-3" />
                <input type="text" name='address' placeholder="Address" className="input input-bordered w-full max-w-xs my-3" />
                <input type="submit" value="Place Order" className="btn btn-accent w-full max-w-xs" />
            </form>
        </div>
    );
};

export default Purchase;