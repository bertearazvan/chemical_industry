import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation, useHistory } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

import PageTitle from '../components/PageTitle';
import Container from '../components/Container';
import GoBack from '../components/GoBack';

const WarehousesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 1.5rem;
  justify-content: center;
`;

const WarehouseButton = styled.div`
  box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.13);
  padding: 1rem;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: center;
`;

const WarehousesOverview = () => {
  const history = useHistory();
  const location = useLocation();
  const [warehouses] = useState(location.state.warehouses.response);
  console.log(warehouses[1]);

  const goToWarehouseStorage = (warehouse) => {
    // console.log(warehouse);

    history.push('/check-storage', { storage: warehouse });
  };

  return (
    <Container>
      <GoBack />
      <PageTitle name="Warehouses overview" />
      <PageHeader name="Select warehouse" />

      <WarehousesContainer>
        {Object.keys(warehouses).map((warehouse, index) => {
          console.log(warehouses[index + 1]);
          return (
            <WarehouseButton
              key={'warehouse-' + index + 1}
              onClick={() => goToWarehouseStorage(warehouses[index + 1])}
            >
              {index + 1}
            </WarehouseButton>
          );
        })}
      </WarehousesContainer>
    </Container>
  );
};

export default WarehousesOverview;
