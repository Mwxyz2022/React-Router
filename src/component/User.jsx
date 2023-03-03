import React, { useState, useEffect } from 'react';

import { fetchUser } from '../gateway/events';

const User = ({ match }) => {
  const [user, setUser] = useState({});
  const userId = match.params.userId;

  useEffect(() => {
    fetchUser(userId).then(userData => {
      setUser(userData);
      //   console.log(userData);
    });
  }, [userId]);

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
