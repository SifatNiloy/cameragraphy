import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Table.css'
const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/allorders`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    // console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        // signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }

                    return res.json()
                })
                .then(data => {
                    setOrders(data)
                })
        }

    }, [user]);
    const handleDelete = id => {
        // event.preventDefault();
        const proceed = window.confirm('Are you sure you want to delete this order?');
        if (proceed) {
            console.log('deleting order with id', id);
            const url = `http://localhost:5000/allorders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted');
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);
                    }
                })
        }
    }
    return (
        <div className=''>
            <h1 className='text-2xl'>Total Ordered Products: {orders.length} </h1>
            <div className="overflow-x-auto">
                <table className="table w-full fixed-table">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Phone</th>
                            <th>Delivery Address</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map((order, index) => <tr>
                                <td className='index'>{index + 1}</td>
                                <td className='name'>{order.name}</td>
                                <td className='price'>{order.price}</td>
                                <td className='phone'>{order.phone}</td>
                                <td className='address'>{order.address}</td>
                                <td ><button className='btn btn-sm' onClick={()=>handleDelete(order._id)}>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;