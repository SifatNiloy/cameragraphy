import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './BgColor.css'
const Navbar = () => {
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };
    let items = <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40">
        <li><Link to='/payment'>Pay</Link></li>
        <li><Link to='/orders'>My Orders</Link></li>
        <li><Link to='/myreview'>Review</Link></li>
        <li><button onClick={logout}>Logout</button></li>
    </ul >
    
    const [user, loading, error] = useAuthState(auth);
    
    const menuItems = <>
        <li className='text-lg text-black'><Link to='/'>Home</Link></li>
        <li className='text-lg text-black'><Link to='/explore'>Explore</Link></li>
        
        {
            user && <li className='text-lg text-black'> <Link to='/dashboard'> Dashboard </Link> </li>
        }
        
        <li >{user ? <button  className="btn btn-ghost text-lg text-black" onClick={logout}>Logout</button> : <Link className='text-lg text-black' to='/dashboard'>Sign In</Link>}</li>
        
    </>
    return (
        <div className="navbar bgcolor px-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-2xl">Cameragraphy</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                
            </div>

        </div>
    );
};

export default Navbar;