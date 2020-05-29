import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation, useHistory } from 'react-router-dom';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import PageHeader from '../components/PageHeader';

import PageTitle from '../components/PageTitle';
import SelectInput from '../components/SelectInput';
import Container from '../components/Container';
import BottomButton from '../components/BottomButton';
import GoBack from '../components/GoBack';
import TableRowDeliveries from '../components/TableRowDeliveries';
import DeliveriesTable from '../components/DeliveriesTable';

const RejectHeader = styled.h4`
  font-size: 20px;
  color: black;
  margin-bottom: 10rem;
  text-align: center;
`;

const RejectTicket = () => {
  const history = useHistory();
  const location = useLocation();
  const [ticketNumber, setTicketNumber] = useState(location.state.ticketNumber);
  const [rejectReasons] = useState([
    'Wrong amount of chemical',
    'Wrong truck number',
    'Wrong company name',
  ]);

  return (
    <Container>
      <GoBack />
      <PageTitle name="Upcoming deliveries" />
      <RejectHeader>
        The job <span style={{ color: 'gray' }}>{ticketNumber}</span> has been
        rejected.
      </RejectHeader>
      <PageHeader name="Select the reason" />
      <SelectInput name="Reject reason" options={rejectReasons}></SelectInput>
      <BottomButton name="Close" onClick={() => history.push('/home-depot')} />
    </Container>
  );
};

export default RejectTicket;
