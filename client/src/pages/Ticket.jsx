import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../components/PageHeader';
import PageTitle from '../components/PageTitle';
import Input from '../components/Input';
import Container from '../components/Container';
import BottomButton from '../components/BottomButton';

const Ticket = () => {
  const [ticketNumber, setTicketNumber] = useState('');
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      history.push('/');
    }
  });

  const checkTicket = async () => {
    history.push(`/ticket-details/${ticketNumber}`);
  };

  return (
    <Container>
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
