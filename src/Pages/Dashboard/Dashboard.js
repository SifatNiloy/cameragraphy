import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                <h2 className="text-5xl">Dashboard</h2>
               <Outlet></Outlet>
                

            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                    <li><Link to='/dashboard/payment'>Pay</Link></li>
                    <li><Link to='/dashboard/orders'>My Orders</Link></li>
                    <li><Link to='/dashboard/review'>Review</Link></li>
                    <li><button onClick={logout}>Logout</button></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;