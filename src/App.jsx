import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './component/Home';
import Users from './component/Users';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="page">
          <ul className="navigation">
            <li className="navigation__item">
              <Link to="/">Home</Link>
            </li>
            <li className="navigation__item">
              <Link to="/users">Users</Link>
            </li>
          </ul>
          <Route path="/users">
            <Users />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
