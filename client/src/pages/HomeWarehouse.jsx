import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { warehouses } from '../networking/warehouses';

import Container from '../components/Container';
import BottomButton from '../components/BottomButton';
import Button from '../components/Button';
import PageHeader from '../components/PageHeader';
import PageTitle from '../components/PageTitle';

const HomeWarehouse = () => {
  const history = useHistory();
  const location = useLocation();
  const [storage, setStorage] = useState('');

  const username = location.state.data;
  const usernameCapitalized =
    username.charAt(0).toUpperCase() + username.slice(1);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      localStorage.clear();
      history.push('/');
    }
    getData();
  }, []);

  const getData = async () => {
    try {
      const { data } = await warehouses();
      setStorage(data.response[0]);
      console.log('====================================');
      console.log('This is warehouse ', data.response[0]);
      console.log('====================================');
    } catch (err) {
      if (err) {
        // localStorage.clear();
        // history.push('/');
      }
    }
  };

  const checkTicket = () => {
    history.push('/ticket-number');
  };

  const checkStorage = () => {
    history.push('/check-storage', { storage });
  };

  const logoutUser = () => {
    localStorage.removeItem('token');
    history.push('/');
  };
  return (
    <Container>
      <PageTitle name={`Welcome, ${usernameCapitalized}!`} />
      <PageHeader name="Choose action" />
      <Button name="Upcoming Deliveries" />
      <Button name="Confirm Ticket" onClick={checkTicket} />
      <Button name="Storage" onClick={checkStorage} />
      <BottomButton name="Logout" onClick={logoutUser} />
    </Container>
  );
};

export default HomeWarehouse;
