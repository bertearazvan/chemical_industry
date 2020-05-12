import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Input = styled.input`
  width: 200px;
  height: 50px;
  margin-top: 100px;
`;

const Login = (props) => {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // for knowing where to redirect the user, if it got redirected to to not auth
  const from = props.location.state || { from: { pathname: '/page' } };

  // if (localStorage.getItem('user')) {
  //   history.push(from.from.pathname);
  // }

  const onLogin = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      const response = await axios.post('http://localhost:9090/users/login', {
        email: email,
        password: password,
      });

      //get the data from login - the user
      let data = response.data.response;
      props.onAuth(true);

      // localStorage.setItem('user', JSON.stringify(data.response));

      // push to the page you came from to login
      history.push(from.from.pathname);

      console.log(data);
    } catch (err) {
      console.log(err.response.data.response);
      setMessage(err.response.data.response);
    }
  };

  const inputStyle = {
    width: '400px',
    height: '100px',
  };

  return (
    <div>
      <form onSubmit={onLogin}>
        <Input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          style={inputStyle}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
