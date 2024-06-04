import React from "react";
import { NavLink } from "react-router-dom";
import '../navbar.css'

const NavBar = () => {
    return (
        <div className="navbar">
            <h1 className="nav">My React App</h1>
            <ul>
                <li><NavLink to="/" >Home</NavLink></li>
                <li><NavLink to="/users" >Users</NavLink></li>
                <li><NavLink to="/products" >Products</NavLink></li>
                <li><NavLink to="/dashboard" >Dashboard</NavLink></li>
                <li><NavLink to="/login" >Login</NavLink></li>
            </ul>
        </div>
    );
};

export default NavBar;