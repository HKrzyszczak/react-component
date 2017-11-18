import React from 'react';

const menuElements = ['home', 'profile', 'dashboard'].map((element, index) => {
    return <li key={index}>{element}</li>;
});

const Menu = () => {
    return (
        <ul>
            {menuElements}
        </ul>
    );
};

export default Menu;