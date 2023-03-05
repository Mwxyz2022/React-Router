import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';

import { fetchUser } from '../gateway/events';

const User = ({ match }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const userId = match.params.userId;

  useEffect(() => {
    fetchUser(userId).then(userData => {
      setUser(userData);
      setLoading(false);
    });
    return () => {
      setLoading(true);
    };
  }, [userId]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="user">
      <img alt="User Avatar" src={user.avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{user.name}</span>
        <span className="user__location">{user.location}</span>
      </div>
    </div>
  );
};

export default User;
