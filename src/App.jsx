import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './component/home/Home';
import Users from './component/users/Users';
import Navigation from './component/navigation/Navigation';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="page">
          <Route path="/" component={Navigation} />
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
