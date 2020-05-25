import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { getDeliveries } from '../networking/deliveries';
import { warehouses } from '../networking/warehouses';
import { setAuthToken } from '../networking/HTTPservice';

import Container from '../components/Container';
import BottomButton from '../components/BottomButton';
import Button from '../components/Button';
import PageHeader from '../components/PageHeader';
import PageTitle from '../components/PageTitle';

const HomeDepot = () => {
  const [deliveryData, setDeliveryData] = useState('');
  const [warehouseData, setWarehouseData] = useState('');
  const history = useHistory();
  const location = useLocation();

  const username = location.state.data;
  const usernameCapitalized =
    username.charAt(0).toUpperCase() + username.slice(1);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setAuthToken(token);
    }
    getDeliveryData();
    getWarehouseData();
  }, []);

  const getDeliveryData = async () => {
    try {
      const { data } = await getDeliveries();
      setDeliveryData(data);
      console.log('====================================');
      console.log('This is delivery ', data.response);
      console.log('====================================');
    } catch (err) {
      if (err) {
        localStorage.clear();
        history.push('/');
      }
    }
  };

  const getWarehouseData = async () => {
    try {
      const { data } = await warehouses();
      setWarehouseData(data);
      console.log('====================================');
      console.log('This is warehouse ', data.response);
      console.log('====================================');
    } catch (err) {
      if (err) {
        localStorage.clear();
        history.push('/');
      }
    }
  };

  const checkTicket = () => {
    history.push('/ticket-number');
  };

  const createJob = () => {
    history.push('/create-job', {
      delivery: deliveryData.response,
    });
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
      <Button name="Check Ticket" onClick={checkTicket} />
      <Button name="Create Job" onClick={createJob} />
      <Button name="Warehouses Overview" />
      <Button name="All Deliveries" />
      <BottomButton name="Logout" onClick={logoutUser} />
    </Container>
  );
};

export default HomeDepot;
