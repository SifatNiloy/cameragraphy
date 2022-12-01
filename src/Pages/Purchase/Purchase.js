import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { productId } = useParams();
    const handlePurchase = event => {
        event.preventDefault();

        // event.target.reset();
    }

    return (
        <div>
            <h2 className='text-3xl'>This is Purchase page : {productId}</h2>
            <form onSubmit={handlePurchase} className='grid grid-cols-1 justify-items-center my-12'>
                {/* <input type="text" name='email' placeholder="email" class="input input-bordered w-full max-w-xs" /> */}
                <input type="email" name='email' placeholder="Email" class="input input-bordered w-full max-w-xs my-3" />
                <input type="text" name='phone' placeholder="Phone number" class="input input-bordered w-full max-w-xs my-3" />
                <input type="text" name='address' placeholder="Address" class="input input-bordered w-full max-w-xs my-3" />
                <input type="submit" value="Place Order" class="btn btn-accent w-full max-w-xs" />
            </form>
        </div>
    );
};

export default Purchase;