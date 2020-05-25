import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import PageHeader from '../components/PageHeader';
import PageTitle from '../components/PageTitle';
import Container from '../components/Container';
import GoBack from '../components/GoBack';
import Button from '../components/Button';

const SelectDriver = () => {
  const history = useHistory();
  const location = useLocation();
  const deliveryType = location.state.deliveryType;
  const delivery = location.state.delivery;
  const companyID = location.state.companyID;

  const selectDriver = (driverID) => {
    history.push('/select-truck', {
      delivery,
      deliveryType,
      companyID,
      driverID,
    });
  };

  return (
    <Container>
      <GoBack />
      <PageTitle name="Create Job Driver" />
      <PageHeader name="Select Driver" />
      {delivery.drivers.map((driver, i) => (
        <Button
          key={i}
          name={`Driver: ${driver.username}`}
          onClick={() => selectDriver(driver.id)}
        />
      ))}
    </Container>
  );
};

export default SelectDriver;
