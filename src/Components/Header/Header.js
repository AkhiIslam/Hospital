import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'
// import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header sticky-top">
            <nav>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
                <NavLink to="/register">Register</NavLink>
                <span style={{ color: 'white' }}> {user.displayName}</span>
                {
                    user.email ? <button className="button" onClick={logOut}>logOut</button> :
                        <NavLink to="/login">Login</NavLink>
                }
            </nav>



        </div>


    );
};

export default Header;