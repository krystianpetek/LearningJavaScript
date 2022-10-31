import { Route, Routes, useLocation } from "react-router-dom";
import React from "react";
import "../styles/Footer.css";
const Footer = () => {
    const location = useLocation();
    const pathName: string = location.pathname;

    return (
        <div>
            <h2>Footer</h2>
            <Routes>
                <Route path="/" element={(<p>You are in <span>Home Page</span> {pathName}</p>)}></Route>
                <Route path={pathName} element={<p>You are in <span>{pathName}</span></p>}></Route>
            </Routes>

        </div>
    );
}

export default Footer;