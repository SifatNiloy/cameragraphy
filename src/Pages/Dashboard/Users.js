import React, { useEffect, useState } from 'react';


const Users = () => {
    const [users, setUsers]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/user',{
            method:'GET',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=> res.json())
        .then(data=> setUsers(data))
    })
   
    return (
        <div>
            <h2 className="text-3xl">All Users: {users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Authorization</th>
                            <th>Remove action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr>
                                <th>{index + 1}</th>
                                <th>{user.email}</th>
                                <th><button class="btn btn-xs">Make Admin</button></th>
                                <th><button class="btn btn-xs">Delete</button></th>
                               
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;