import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { getDeliveries } from '../networking/deliveries';
import { getActualDeliveries } from '../networking/deliveries';
import { getUpcomingDeliveries } from '../networking/deliveries';
import { warehouses } from '../networking/warehouses';
import { setAuthToken } from '../networking/HTTPservice';

import Container from '../components/Container';
import BottomButton from '../components/BottomButton';
import Button from '../components/Button';
import PageHeader from '../components/PageHeader';
import PageTitle from '../components/PageTitle';

const HomeDepot = () => {
  const [deliveryData, setDeliveryData] = useState('');
  const [actualDeliveryData, setActualDeliveryData] = useState('');
  const [warehouseData, setWarehouseData] = useState('');
  const [upcomingDeliveries, setUpcomingDeliveries] = useState('');
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setAuthToken(token);
    }
    getDeliveryData();
    getWarehouseData();
    getCorrectDeliveries();
    getUpcomingTrucks();
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

  const getCorrectDeliveries = async () => {
    try {
      const { data } = await getActualDeliveries();
      setActualDeliveryData(data);
      console.log('act', data);
    } catch (err) {
      if (err) {
        // localStorage.clear();
        // history.push('/');
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

  const allDeliveries = () => {
    history.push('/all-deliveries', {
      delivery: deliveryData.response,
      actualDeliveries: actualDeliveryData.deliveries,
    });
  };

  const goToUpcomingDeliveries = () => {
    history.push('/upcoming-deliveries', {
      deliveries: upcomingDeliveries.response,
    });
  };

  const warehousesOverview = () => {
    history.push('/warehouses-overview', {
      warehouses: warehouseData,
    });
  };

  const logoutUser = () => {
    localStorage.removeItem('token');
    history.push('/');
  };
  return (
    <Container>
      <PageTitle name="Welcome Depot Worker" />
      <PageHeader name="Choose action" />
      <Button name="Upcoming Deliveries" onClick={goToUpcomingDeliveries} />
      <Button name="Check Ticket" onClick={checkTicket} />
      <Button name="Create Job" onClick={createJob} />
      <Button name="Warehouses Overview" onClick={warehousesOverview} />
      <Button name="All Deliveries" onClick={allDeliveries} />
      <BottomButton name="Logout" onClick={logoutUser} />
    </Container>
  );
};

export default HomeDepot;
