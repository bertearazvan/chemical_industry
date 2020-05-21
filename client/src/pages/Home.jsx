import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../components/Button';

const Home = () => {
  const history = useHistory();

  const logoutUser = () => {
    localStorage.removeItem('token');
    history.push('/');
  };
  return <Button name="Logout" onClick={logoutUser} />;
};

export default Home;
