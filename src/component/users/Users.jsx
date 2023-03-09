import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import User from '../user/User';
import Navigation from '../navigation/Navigation';

const Users = () => {
  return (
    <div className="page__content">
      <h1>Users</h1>
      <Route path="/users" component={Navigation} />
      <Switch>
        <Route exact path="/users">
          <span>Select a user please</span>
        </Route>
        <Route exact path="/users/:userId" component={User} />
      </Switch>
    </div>
  );
};

export default Users;
