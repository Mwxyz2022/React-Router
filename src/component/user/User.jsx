import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../spinner/Spinner';

import './user.scss';

import { fetchUser } from '../../gateway/events';

const User = ({ match }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const userId = match.params.userId;

  useEffect(() => {
    fetchUser(userId)
      .then(userData => {
        setUser(userData);
      })
      .finally(() => setLoading(false));

    return () => {
      setLoading(true);
    };
  }, [userId]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      {user ? (
        <div className="user">
          <img alt="User Avatar" src={user.avatar_url} className="user__avatar" />
          <div className="user__info">
            <span className="user__name">{user.name}</span>
            <span className="user__location">{user.location}</span>
          </div>
        </div>
      ) : (
        <>
          <div className="error">Failed😥</div>
          <Link to="/">Home</Link>
        </>
      )}
    </>
  );
};

export default User;
