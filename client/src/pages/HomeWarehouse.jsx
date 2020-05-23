import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { warehouses } from '../networking/warehouses';
import { setAuthToken } from '../networking/HTTPservice';

import Container from '../components/Container';
import BottomButton from '../components/BottomButton';

const HomeWarehouse = () => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setAuthToken(token);
    }
    getData();
  });

  const getData = async () => {
    try {
      const { warehouseData } = await warehouses();
      console.log('====================================');
      console.log('This is warehouse ', warehouseData);
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
      warehouse
      <BottomButton name="Logout" onClick={logoutUser} />
    </Container>
  );
};

export default HomeWarehouse;
