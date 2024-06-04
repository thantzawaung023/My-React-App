import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const ShareLayout = () => {
    return (
        <div>
            <NavBar />
            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default ShareLayout;