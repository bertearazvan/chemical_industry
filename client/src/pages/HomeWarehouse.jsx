import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { warehouses } from '../networking/warehouses';
import { getUpcomingDeliveries } from '../networking/deliveries';

import Container from '../components/Container';
import BottomButton from '../components/BottomButton';
import Button from '../components/Button';
import PageHeader from '../components/PageHeader';
import PageTitle from '../components/PageTitle';

const HomeWarehouse = () => {
  const history = useHistory();
  const [storage, setStorage] = useState('');
  const [upcomingDeliveries, setUpcomingDeliveries] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      localStorage.clear();
      history.push('/');
    }
    getData();
    getUpcomingTrucks();
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

  const getUpcomingTrucks = async () => {
    try {
      const { data } = await getUpcomingDeliveries();
      setUpcomingDeliveries(data);
      console.log('====================================');
      console.log('This is upcoming deliveries ', data);
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

  const goToUpcomingDeliveries = () => {
    history.push('/upcoming-deliveries', {
      deliveries: upcomingDeliveries.response,
    });
  };
  return (
    <Container>
      <PageTitle name="Welcome Warehouse Worker" />
      <PageHeader name="Choose action" />
      <Button name="Upcoming Deliveries" onClick={goToUpcomingDeliveries} />
      <Button name="Confirm Ticket" onClick={checkTicket} />
      <Button name="Storage" onClick={checkStorage} />
      <BottomButton name="Logout" onClick={logoutUser} />
    </Container>
  );
};

export default HomeWarehouse;
