import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { setAuthToken } from '../networking/HTTPservice';
import { login } from '../networking/users';

import PageHeader from '../components/PageHeader';
import PageTitle from '../components/PageTitle';
import Input from '../components/Input';
import Container from '../components/Container';
import BottomButton from '../components/BottomButton';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const loginUser = async () => {
    try {
      const { data } = await login({ username, password });
      setAuthToken(data.token);
      localStorage.setItem('token', data.token);

      if (data.response.warehouse_id === null) {
        history.push('/home-depot');
      } else if (data.response.warehouse_id !== null) {
        history.push('/home-warehouse');
      }
    } catch (err) {
      if (err) {
        console.log('User cannot login.');
        return;
      }
    }
  };

  return (
    <Container>
      <PageTitle name="CheManager" />
      <PageHeader name="Login" />
      <Input
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <BottomButton onClick={loginUser} name="Login" />
    </Container>
  );
};

export default Login;
