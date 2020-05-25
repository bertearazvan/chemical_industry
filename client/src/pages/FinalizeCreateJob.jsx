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
  const driver = location.state.driver;
  const truck = location.state.truck;
  const data = location.state.data.response;

  const filteredData = data.possibleStorage.filter((data) => {
    return data.storage;
  });

  let arrayDriver = [];
  arrayDriver.push(driver.id);

  const sendData = async () => {
    try {
      await deliveries({
        deliveryType,
        companyId: companyID,
        drivers: arrayDriver,
        truckId: truck.id,
        chemicals: filteredData,
        ticketNo: data.ticketNumber,
      });
      history.push('/home-depot');
    } catch (err) {
      if (err) {
        console.log(err.message);
      }
    }
  };

  return (
    <Container>
      <GoBack />
      <PageTitle name="Create Job Information" />
      <DeliveryTable
        ticket={data.ticketNumber}
        arrival={data.arrival}
        type={deliveryType === 1 ? 'Delivery' : 'Pick-up'}
        drivers={driver.username}
        truck={truck.plate_no}
      />
      <ChemicalsDeliveryTable />
      {filteredData.map((oneStorage, i) => (
        <TableRow
          key={i}
          chemical={oneStorage.chemicalName}
          quantity={oneStorage.storage}
          warehouse={oneStorage.warehouseId}
          isle="3"
        />
      ))}
      <BottomButton name="Send" onClick={sendData} />
    </Container>
  );
};

export default FinalizeCreateJob;
