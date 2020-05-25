import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import PageHeader from '../components/PageHeader';
import PageTitle from '../components/PageTitle';
import Container from '../components/Container';
import GoBack from '../components/GoBack';
import Button from '../components/Button';

const SelectTruck = () => {
  const history = useHistory();
  const location = useLocation();
  const deliveryType = location.state.deliveryType;
  const delivery = location.state.delivery;
  const companyID = location.state.companyID;
  const driver = location.state.driver;

  const selectTruck = (truck) => {
    history.push('/select-chemicals', {
      delivery,
      deliveryType,
      companyID,
      driver,
      truck,
    });
  };

  return (
    <Container>
      <GoBack />
      <PageTitle name="Create Job Truck" />
      <PageHeader name="Select Truck" />
      {delivery.trucks.map((truck, i) => (
        <Button
          key={i}
          name={`Truck: ${truck.plate_no}`}
          onClick={() => selectTruck(truck)}
        />
      ))}
    </Container>
  );
};

export default SelectTruck;
