import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { setAuthToken } from '../networking/HTTPservice';

import PageHeader from '../components/PageHeader';
import PageTitle from '../components/PageTitle';
import Input from '../components/Input';
import Container from '../components/Container';
import BottomButton from '../components/BottomButton';
import GoBack from '../components/GoBack';

const Ticket = () => {
  const [ticketNumber, setTicketNumber] = useState('');
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setAuthToken(token);
    }
    // if (!token) {
    //   history.push('/');
    // }
  });
  const checkTicket = async () => {
    if (!ticketNumber) {
      return alert('You need to add a ticket number!');
    }
    history.push(`/ticket-details/${ticketNumber}`);
  };

  return (
    <Container>
      <GoBack />
      <PageTitle name="Ticket number" />
      <PageHeader name="Insert Ticket Number" />
      <Input
        type="text"
        placeholder="Ticket number"
        onChange={(e) => setTicketNumber(e.target.value)}
      />
      <BottomButton onClick={checkTicket} name="Check ticket" />
    </Container>
  );
};

export default Ticket;
