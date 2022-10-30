import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const list = [
    { name: "start", path: "/", end: true },
    { name: "products", path: "/products" },
    { name: "contact", path: "/contact" },
    { name: "admin", path: "/admin" },
];

const menu = list.map(menuItem => (
    <li key={menuItem.name}>
        <NavLink to={menuItem.path} end={menuItem.end}>{menuItem.name}</NavLink>
    </li>
));

const Navigation = () => {
    return (
        <div>
            <nav className="main">
                <ul>
                    {menu}
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;