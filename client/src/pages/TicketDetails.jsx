import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { ticket } from '../networking/deliveries';

import PageTitle from '../components/PageTitle';
import Container from '../components/Container';
import DeliveryTable from '../components/DeliveryTable';
import ChemicalsDeliveryTable from '../components/ChemicalsDeliveryTable';
import TableRow from '../components/TableRow';
import Button from '../components/Button';

const TicketDetails = () => {
  const [deliveries, setDeliveries] = useState('');
  const { ticketNumber } = useParams();
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      history.push('/');
    }

    getData();
  }, []);

  const getData = async () => {
    try {
      const { data } = await ticket(ticketNumber);
      setDeliveries(data);
    } catch (err) {
      localStorage.clear();
      history.push('/');
    }
  };
  console.log(deliveries);

  return (
    <Container>
      <PageTitle name="Delivery Details" />
      {Object.keys(deliveries).map((delivery, i) => (
        <DeliveryTable
          key={i}
          ticket={deliveries[delivery].ticket_no}
          arrival="Not announced"
          type={deliveries[delivery].deliveryType}
          drivers={deliveries[delivery].drivers[i].firstName}
          truck={deliveries[delivery].truck.plateNumber}
        />
      ))}
      <ChemicalsDeliveryTable />
      {Object.keys(deliveries).map((delivery, i) => (
        <TableRow
          key={i}
          chemical={deliveries[delivery].deliveryStock[i].chemicalName}
          quantity={deliveries[delivery].deliveryStock[i].storage}
          warehouse={deliveries[delivery].deliveryStock[i].warehouseNumber}
          isle="5"
        />
      ))}
      {/* {Object.keys(deliveries).map((delivery, i) => (
        <TableRow
          key={i++}
          chemical={deliveries[delivery].deliveryStock[i++].chemicalName}
          quantity={deliveries[delivery].deliveryStock[i++].storage}
          warehouse={deliveries[delivery].deliveryStock[i++].warehouseNumber}
          isle="6"
        />
      ))} */}
    </Container>
  );
};

export default TicketDetails;
