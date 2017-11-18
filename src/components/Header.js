import React from 'react';
import logo from '../logo.svg';
import Menu from './Menu.js';
// import logoStyle from './logo.css';

const logotyp = {
    width: 40,
    height: 40
};

const Header = () => {
    return (
      <div>
          <h1>Header</h1>
          <img src={logo}
               style={logotyp}/>
          <Menu/>
      </div>
    );
};

export default Header;