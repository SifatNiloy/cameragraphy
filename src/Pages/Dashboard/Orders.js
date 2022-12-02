import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Orders = () => {
    const [orders, setOrders]=useState([]);
    const [user]= useAuthState(auth);
    useEffect(()=>{
        if(user){
            fetch(`http://localhost:5000/purchased?email=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data))
        }

    },[user])
    return (
        <div className=''>
            <h1>My Ordered Products : {orders.length} </h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Phone</th>
                            <th>Delivery Address</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                       {
                            orders.map((order, index) => <tr>
                                <th>{index+1}</th>
                                <th>{order.name}</th>
                                <td>{order.price}</td>
                                <td>{order.phone}</td>
                                <td>{order.address}</td>
                            </tr>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;