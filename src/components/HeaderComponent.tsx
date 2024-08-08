import React from 'react';
import {Link, NavLink} from "react-router-dom";
import "../css/main.css";

const HeaderComponent = () => {
    return (
        <div>
            Header
            <ul>
                <li><NavLink to={'/'} className={({ isActive }) => (isActive ? 'noActive' : "disable")}>Home Page</NavLink></li>
                <li><Link to={'/posts'}>Posts All</Link></li>
                <li><Link to={'/users'}>Users All</Link></li>
            </ul>
        </div>
    );
};

export default HeaderComponent;