import React from 'react';
import { Link } from 'react-router-dom';

import './navigation.scss';

const Navigation = ({ match }) => {
  const path = match.path;

  if (path === '/') {
    return (
      <ul className="navigation">
        <li className="navigation__item">
          <Link to="/">Home</Link>
        </li>
        <li className="navigation__item">
          <Link to="/users">Users</Link>
        </li>
      </ul>
    );
  }

  return (
    <ul className="navigation">
      <li className="navigation__item">
        <Link to="/users/github">Github</Link>
      </li>
      <li className="navigation__item">
        <Link to="/users/facebook">Facebook</Link>
      </li>
    </ul>
  );
};

export default Navigation;
