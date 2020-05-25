import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { deliveries } from '../networking/deliveries';

import PageTitle from '../components/PageTitle';
import Container from '../components/Container';
import GoBack from '../components/GoBack';
import ChemicalsDeliveryTable from '../components/ChemicalsDeliveryTable';
import TableRow from '../components/TableRow';
import DeliveryTable from '../components/DeliveryTable';
import BottomButton from '../components/BottomButton';

const FinalizeCreateJob = () => {
  const history = useHistory();
  const location = useLocation();
  const deliveryType = location.state.deliveryType;
  const companyID = location.state.companyID;
  const driverID = location.state.driverID;
  const truckID = location.state.truckID;
  const chemicals = location.state.chemicals;
  const response = location.state.response;
  useEffect(() => {
    console.log(location.state.driverID);
  }, []);

  return (
    <Container>
      <GoBack />
      <PageTitle name="Create Job Information" />
      <ChemicalsDeliveryTable />
      <DeliveryTable />
      <TableRow />
      <BottomButton name="Send" />
    </Container>
  );
};

export default FinalizeCreateJob;
