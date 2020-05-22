import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { setAuthToken } from '../networking/HTTPservice';
import { login } from '../networking/users';

import PageHeader from '../components/PageHeader';
import Input from '../components/Input';
import Container from '../components/Container';
import Button from '../components/Button';

const StyledForm = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  top: 200px;
`;

const ButtonPosition = styled.div`
  position: absolute;
  bottom: 35px;
  left: 0px;
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  const checkedLoggedIn = () => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthToken(token);
    }
    return token ? true : false;
  };

  useEffect(() => {
    setIsLoggedIn(checkedLoggedIn);
  }, []);

  if (isLoggedIn) {
    history.push('/home');
  }

  const loginUser = async () => {
    try {
      const { data } = await login({ username, password });
      setAuthToken(data.token);
      localStorage.setItem('token', data.token);
      history.push('/home');
    } catch (err) {
      if (err) {
        console.log('User cannot login.');
        return;
      }
    }
  };

  return (
    <Container>
      <StyledForm>
        <PageHeader header="Login" />
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
      </StyledForm>
      <ButtonPosition>
        <Button onClick={loginUser} name="Login" />
      </ButtonPosition>
    </Container>
  );
};

export default Login;
