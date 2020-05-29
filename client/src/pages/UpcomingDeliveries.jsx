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

const FilterBox = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
  width: 315px;
  height: auto;
  margin-top: 15px;
`;

const JobsBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 315px;
  height: auto;
  max-height: 80vh;
  overflow: scroll;
  margin-top: 15px;
`;

const StyledTimespan = styled.h4`
  position: relative;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: white;
`;

const UpcomingDeliveries = () => {
  const history = useHistory();
  const location = useLocation();
  const [deliveries, setDeliveries] = useState(location.state.deliveries);

  return (
    <Container>
      <GoBack />
      <PageTitle name="Upcoming deliveries" />
      <StyledTimespan>
        {moment().format('DD-MM-YY') +
          ' to ' +
          moment().add(6, 'days').format('DD-MM-YY')}
      </StyledTimespan>

      <div>
        <DeliveriesTable />
        <JobsBox>
          {deliveries.map((delivery, i) => {
            return (
              <TableRowDeliveries
                key={'delivery-' + i}
                ticketNumber={delivery.ticketNumber}
                deliveryDate={moment(delivery.dateScheduled).format('DD/MM/YY')}
                deliveryType={delivery.deliveryType}
                companyName={delivery.company}
              />
            );
          })}
        </JobsBox>
      </div>
    </Container>
  );
};

export default UpcomingDeliveries;
