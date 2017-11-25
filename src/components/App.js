import React from 'react';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Counter from './Counter';
import Home from './Home';
import Form from './Form';

const App = () => {
      return (
          <Router>
          <div>
              <ul>
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/counter">Licznik</Link>
                  </li>
                  <li>
                      <Link to="/form">Formatka</Link>
                  </li>
              </ul>
              <Route exact path="/" component={Home} />
              <Route path="/counter" component={Counter} />
              <Route path="/form" component={Form} />
          </div>
          </Router>);
};

export default App;