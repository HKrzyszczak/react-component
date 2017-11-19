import React from 'react';
import Header from './Header.js';
import Home from './Home.js';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Profile from './Profie.js';
import Dashboard from './Dashboard.js'

import Footer from './Footer.js';


const App = () => {
    // return (
    //     <div>
    //         <Header/>
    //         <Home/>
    //         <Footer/>
    //     </div>
    // );

    return (
        <Router>
            <div>
                <Header/>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/daschboard">Dashboard</Link></li>
                </ul>
                <Route exact path="/" component={Home}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Footer/>
            </div>
        </Router>
    )

};

export default App;