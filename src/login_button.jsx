// LoginButton.js
import React from 'react';
import { useHistory } from 'react-router-dom';

const LoginButton = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('?show=login');
  };

  return (
    <button onClick={handleClick}>
      Login
    </button>
  );
};

export default LoginButton;
