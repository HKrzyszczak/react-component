import React from 'react';
import logo from '../logo.svg';
import Menu from './Menu.js';

const logotyp = {
    width: 40,
    heigh: 40
};

const Header = () => {
    return (
      <div>
          <img src={logo} style={logotyp}/>
          <h1>Header</h1>
          <Menu/>
      </div>
    );
};

export default Header;