import React from 'react';
import { Link } from 'react-router-dom';

import './navigation.scss';

const links = {
  headerLinks: [
    { title: 'Home', urlTo: '/' },
    { title: 'Users', urlTo: '/users' },
  ],
  usersLinks: [
    { title: 'Github', urlTo: '/users/github' },
    { title: 'Facebook', urlTo: '/users/facebook' },
  ],
};

const Navigation = ({ match }) => {
  const path = match.path;

  const getItem = arrLinks => {
    return arrLinks.map(link => (
      <li className="navigation__item" key={link.title}>
        <Link to={link.urlTo}>{link.title}</Link>
      </li>
    ));
  };

  return (
    <ul className="navigation">
      {path === '/' ? getItem(links.headerLinks) : getItem(links.usersLinks)}
    </ul>
  );
};

export default Navigation;
