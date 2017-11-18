import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Menu from './Menu.js';

const App = () => {
    return (
        <div>
            <Header/>
            <h1>
                Hello world
            </h1>
            <p>
                Jakiś content
            </p>
            <Footer/>
        </div>
    );
};

export default App;