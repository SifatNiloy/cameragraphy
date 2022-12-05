import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';


const UserRow = ({ user, index, refetch }) => {
    const {email, role}=user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method:'PUT',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=> {
            if(res.status===403){
                // toast.error('failed to make an admin ')
            }
            return res.json()
        })
        .then(data=> {
            if(data.modifiedCount>0){
                console.log(data);
                refetch();
                // toast.success(`successfully made an admin`);
            }
        })
    }
    const [users, setUsers]= useState([]);
    const handleDeleteUser = id => {

        // event.preventDefault();
        const proceed = window.confirm('Are you sure you want to delete this order?');

        if (proceed) {
            console.log('deleting user with id', id);
            const url = `http://localhost:5000/user/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        
                        console.log('deleted');
                        const remaining = users.filter(order => order._id !== id);
                        setUsers(remaining);
                    }
                })
        }
    }

    
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td>{role === 'admin'? 'Admin': <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</td>
            <td><button onClick={()=>handleDeleteUser(user._id)} className="btn btn-xs">Delete</button></td>

        </tr>
        
    );
};

export default UserRow;