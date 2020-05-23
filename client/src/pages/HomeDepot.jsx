import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { deliveries } from '../networking/deliveries';
import { warehouses } from '../networking/warehouses';
import { setAuthToken } from '../networking/HTTPservice';

import Container from '../components/Container';
import BottomButton from '../components/BottomButton';

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

  const logoutUser = () => {
    localStorage.removeItem('token');
    history.push('/');
  };
  return (
    <Container>
      depot
      <BottomButton name="Logout" onClick={logoutUser} />
    </Container>
  );
};

export default HomeDepot;
