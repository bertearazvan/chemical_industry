import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import styled from 'styled-components';

import { ticket } from '../networking/deliveries';

import PageTitle from '../components/PageTitle';
import Container from '../components/Container';
import DeliveryTable from '../components/DeliveryTable';
import ChemicalsDeliveryTable from '../components/ChemicalsDeliveryTable';
import TableRow from '../components/TableRow';
import Button from '../components/Button';

const ButtonContainer = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 80px;
  left: 0px;
`;

const ButtonWrapper = styled.div`
  width: 315px;
  margin: auto;
`;

const TicketDetails = () => {
  const [deliveryStock, setDeliveryStock] = useState([]);
  const [ticketno, setTicketno] = useState('');
  const [deliveryType, setDeliveryType] = useState('');
  const [drivers, setDrivers] = useState([]);
  const [plateNumber, setPlateNumber] = useState('');
  const { ticketNumber } = useParams();
  const history = useHistory();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const { data } = await ticket(ticketNumber);
      setDeliveryStock(data.delivery.deliveryStock);
      setTicketno(data.delivery.ticket_no);
      setDeliveryType(data.delivery.deliveryType);
      setDrivers(data.delivery.drivers);
      setPlateNumber(data.delivery.truck.plateNumber);
    } catch (err) {
      localStorage.clear();
      history.push('/');
    }
  };

  return (
    <Container>
      <PageTitle name="Delivery Details" />
      <DeliveryTable
        ticket={ticketno}
        arrival="Not announced"
        type={deliveryType}
        drivers={drivers.map((driver, i) => (
          <p key={i}>{driver.firstName}</p>
        ))}
        truck={plateNumber}
      />
      <ChemicalsDeliveryTable />

      {deliveryStock.map((delivery, i) => (
        <TableRow
          key={i}
          chemical={delivery.chemicalName}
          quantity={delivery.storage}
          warehouse={delivery.warehouseNumber}
          isle="5"
        />
      ))}
      <ButtonContainer>
        <ButtonWrapper>
          <Button name="Send" onClick={() => console.log('clicked')} />
          <Button name="Reject" onClick={() => console.log('clicked')} />
        </ButtonWrapper>
      </ButtonContainer>
    </Container>
  );
};

export default TicketDetails;
