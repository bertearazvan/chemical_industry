import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { deliveries } from '../networking/deliveries';
import { warehouses } from '../networking/warehouses';
import { setAuthToken } from '../networking/HTTPservice';

import Container from '../components/Container';
import BottomButton from '../components/BottomButton';
import Button from '../components/Button';
import PageHeader from '../components/PageHeader';
import PageTitle from '../components/PageTitle';

const HomeDepot = () => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setAuthToken(token);
    }
    getDeliveryData();
    getWarehouseData();
  });

  const getDeliveryData = async () => {
    try {
      const { data } = await deliveries();
      console.log('====================================');
      console.log('This is delivery ', data);
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
      console.log('====================================');
      console.log('This is warehouse ', data);
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

  const logoutUser = () => {
    localStorage.removeItem('token');
    history.push('/');
  };
  return (
    <Container>
      <PageTitle name="Welcome depot worker" />
      <PageHeader name="Choose action" />
      <Button name="Upcoming Trucks" />
      <Button name="Check Ticket" onClick={checkTicket} />
      <Button name="Create Job" />
      <Button name="Warehouses Overview" />
      <Button name="All Deliveries" />
      <BottomButton name="Logout" onClick={logoutUser} />
    </Container>
  );
};

export default HomeDepot;
