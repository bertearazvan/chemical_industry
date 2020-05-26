import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import PageHeader from '../components/PageHeader';
import PageTitle from '../components/PageTitle';
import Container from '../components/Container';
import GoBack from '../components/GoBack';
import Button from '../components/Button';

const CreateJob = () => {
  const history = useHistory();
  const location = useLocation();
  const delivery = location.state.delivery;

  const deliveryJob = (deliveryType) => {
    history.push('/select-company-job/', { deliveryType, delivery });
  };

  return (
    <Container>
      <GoBack />
      <PageTitle name="Create Job" />
      <PageHeader name="Select type" />
      {delivery.deliveryTypes.map((delivery, i) => (
        <Button
          key={i}
          name={delivery.name}
          onClick={() => deliveryJob(delivery.id)}
        />
      ))}
    </Container>
  );
};

export default CreateJob;
