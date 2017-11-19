import React from 'react';
import Header from './Header.js';
import Home from './Home.js';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Profile from './Profie.js';
import Dashboard from './Dashboard.js'
import Menu from './Menu.js';

import Footer from './Footer.js';


const App = () => {
      return (
        <Router>
            <div>
                <Header/>
                <Route exact path="/" component={Home}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Footer/>
            </div>
        </Router>
    )

};

export default App;