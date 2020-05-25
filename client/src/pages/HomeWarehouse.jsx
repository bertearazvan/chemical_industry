import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { warehouses } from '../networking/warehouses';

import Container from '../components/Container';
import BottomButton from '../components/BottomButton';

const HomeWarehouse = () => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      localStorage.clear();
      history.push('/');
    }
    getData();
  });

  const getData = async () => {
    try {
      const { data } = await warehouses();
      console.log('====================================');
      console.log('This is warehouse ', data);
      console.log('====================================');
    } catch (err) {
      if (err) {
        // localStorage.clear();
        // history.push('/');
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
