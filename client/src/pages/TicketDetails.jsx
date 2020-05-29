import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import styled from 'styled-components';

import { ticket, confirmDepotTicket } from '../networking/deliveries';
import { setAuthToken } from '../networking/HTTPservice';

import PageTitle from '../components/PageTitle';
import Container from '../components/Container';
import DeliveryTable from '../components/DeliveryTable';
import ChemicalsDeliveryTable from '../components/ChemicalsDeliveryTable';
import TableRow from '../components/TableRow';
import Button from '../components/Button';
import GoBack from '../components/GoBack';

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
  const [arrival, setArrival] = useState('');
  const { ticketNumber } = useParams();
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setAuthToken(token);
    }
    getData();
  }, []);

  const getData = async () => {
    try {
      const { data } = await ticket(ticketNumber);
      console.log(data);
      setDeliveryStock(data.delivery.deliveryStock);
      setTicketno(data.delivery.ticket_no);
      setDeliveryType(data.delivery.deliveryType);
      setDrivers(data.delivery.drivers);
      setPlateNumber(data.delivery.truck.plateNumber);
      setArrival(data.delivery.time);
    } catch (err) {
      // localStorage.clear();
      // history.push('/');
    }
  };

  const confirmTicket = async () => {
    try {
      const { data } = await confirmDepotTicket({ ticketNumber: ticketno });
      console.log(data);
      history.push('/home-depot');
    } catch (err) {
      alert(err.response.data.response);
    }
  };

  const rejectTicket = async () => {
    history.push('/reject-ticket', {
      ticketNumber,
    });
  };

  return (
    <Container>
      <GoBack />
      <PageTitle name="Delivery Details" />
      <DeliveryTable
        ticket={ticketno}
        arrival={arrival}
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
          <Button name="Send" onClick={() => confirmTicket()} />
          <Button name="Reject" onClick={() => rejectTicket()} />
        </ButtonWrapper>
      </ButtonContainer>
    </Container>
  );
};

export default TicketDetails;
