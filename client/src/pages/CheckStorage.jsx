import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import Container from '../components/Container';
import BottomButton from '../components/BottomButton';
import PageTitle from '../components/PageTitle';
import MaxCapacityStorage from '../components/MaxCapacityStorage';
import AvailableCapacityStorage from '../components/AvailableCapacityStorage';
import InStockStorage from '../components/InStockStorage';
import TableRow from '../components/TableRow';

const CheckStorage = () => {
  const history = useHistory();
  const location = useLocation();

  const storage = location.state.storage;
  console.log(storage);
  return (
    <Container>
      <PageTitle name={`Warehouse ${storage.warehouse_number} Storage`} />
      <MaxCapacityStorage
        warehouse={storage.warehouse_id}
        capacity={storage.warehouse_total_capacity}
      />
      <AvailableCapacityStorage capacity={storage.warehouse_current_storage} />
      <InStockStorage />
      {storage.chemicals.map((chemical, i) => (
        <TableRow
          key={i}
          chemical={chemical.chemical}
          quantity={chemical.storage}
          warehouse={storage.warehouse_number}
          isle="2"
        />
      ))}

      <BottomButton name="Close" onClick={() => history.goBack()} />
    </Container>
  );
};

export default CheckStorage;
