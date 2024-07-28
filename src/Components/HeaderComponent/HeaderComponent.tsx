import React from 'react';
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <h1>Header</h1>
            <ul>
                <li><NavLink to={'/'}>Auth</NavLink></li>
                <li><NavLink to={'registration'}>Registration</NavLink></li>
                <li><NavLink to={'cars'}>All Cars</NavLink></li>
            </ul>
        </div>
    );
};

export default HeaderComponent;