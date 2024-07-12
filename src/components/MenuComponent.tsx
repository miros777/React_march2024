import React from 'react';
import {Link} from "react-router-dom";

const MenuComponent = () => {
    return (
        <div>
            <li><Link to={''}>Home</Link></li>
            <li><Link to={'users'}>Users page</Link></li>
            <li><Link to={'posts'}>Posts page</Link></li>
            <li><Link to={'comments'}>Comments page</Link></li>
        </div>
    );
};

export default MenuComponent;