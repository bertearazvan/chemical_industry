import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import PageHeader from '../components/PageHeader';
import PageTitle from '../components/PageTitle';
import Container from '../components/Container';
import GoBack from '../components/GoBack';
import Button from '../components/Button';

const SelectCompanyJob = () => {
  const history = useHistory();
  const location = useLocation();
  const deliveryType = location.state.deliveryType;
  const delivery = location.state.delivery;

  const companyId = (companyID) => {
    history.push('/select-driver', {
      delivery,
      deliveryType,
      companyID,
    });
  };

  return (
    <Container>
      <GoBack />
      <PageTitle name="Create Job Company" />
      <PageHeader name="Select Company" />
      {delivery.companies.map((company, i) => (
        <Button
          key={i}
          name={company.name}
          onClick={() => companyId(company.id)}
        />
      ))}
    </Container>
  );
};

export default SelectCompanyJob;
