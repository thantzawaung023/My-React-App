import React from "react";
import { Link, Outlet } from "react-router-dom";


const Dashboard = ({ user }) => {
    console.log('aaccc', user)
    return (
        <div>
            <h1>Welcome from Dashboard {user}</h1>
            <nav>
                <Link to="users">Go to Users</Link>
            </nav>
            <Outlet />
        </div>
    );
}

export default Dashboard;