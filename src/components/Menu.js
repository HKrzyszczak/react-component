import React from 'react';
import {Link} from 'react-router-dom';

const Menu = () => {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/dashboard">Daschboard</Link></li>
        </ul>
    );
};

export default Menu;