import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation, useHistory } from 'react-router-dom';
import moment from 'moment';

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
  max-height: 200px;
  overflow: scroll;
  margin-top: 15px;
`;

const AllDeliveries = (props) => {
  const history = useHistory();
  const location = useLocation();
  const [fromDateList] = useState([
    moment().add(-1, 'days').format(),
    moment().add(-2, 'days').format(),
    moment().add(-3, 'days').format(),
    moment().add(-4, 'days').format(),
    moment().add(-5, 'days').format(),
    moment().add(-6, 'days').format(),
    moment().add(-7, 'days').format(),
  ]);

  const [toDateList] = useState([
    moment().add(1, 'days').format(),
    moment().add(2, 'days').format(),
    moment().add(3, 'days').format(),
    moment().add(4, 'days').format(),
    moment().add(5, 'days').format(),
    moment().add(6, 'days').format(),
    moment().add(7, 'days').format(),
  ]);
  const [deliveryData] = useState(location.state.delivery);
  const [deliveries, setDeliveries] = useState(location.state.actualDeliveries);
  const [form, setForm] = useState({
    from: null,
    to: null,
    chemical: null,
    company: null,
    deliveryType: null,
    driver: null,
    caseHandler: null,
    depot: null,
  });

  const onChangeForm = (prop) => (event) => {
    setForm({ ...form, [prop]: event.target.value });
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      history.push('/');
    }
  }, []);

  const onAddFilter = () => {
    let arrayToReturn = location.state.actualDeliveries;

    // chemicals
    if (form.chemical !== 'Chemicals' && form.chemical !== null) {
      console.log('da');
      arrayToReturn = arrayToReturn.filter((delivery) => {
        return delivery.deliveryStock.some(
          (stock) => stock.chemicalName === form.chemical
        );
      });
    }

    if (form.company !== 'Companies' && form.company !== null) {
      arrayToReturn = arrayToReturn.filter(
        (delivery) => delivery.company.companyName === form.company
      );
    }

    if (form.deliveryType !== 'Delivery types' && form.deliveryType !== null) {
      arrayToReturn = arrayToReturn.filter(
        (delivery) => delivery.deliveryType === form.deliveryType
      );
    }

    if (form.driver !== 'Drivers' && form.driver !== null) {
      arrayToReturn = arrayToReturn.filter((delivery) => {
        return delivery.drivers.some(
          (driver) => driver.username === form.driver
        );
      });
    }

    if (form.caseHandler !== 'Case handler' && form.caseHandler !== null) {
      arrayToReturn = arrayToReturn.filter(
        (delivery) => delivery.caseHandler === form.caseHandler
      );
    }

    if (form.from !== 'From' && form.from !== null) {
      arrayToReturn = arrayToReturn.filter((delivery) => {
        return moment(delivery.date_scheduled).isAfter(form.from);
      });
    }

    if (form.to !== 'To' && form.to !== null) {
      arrayToReturn = arrayToReturn.filter((delivery) => {
        return moment(delivery.date_scheduled).isBefore(form.to);
      });
    }

    if (form.depot !== 'Depots' && form.depot !== null) {
      arrayToReturn = arrayToReturn.filter((delivery) => {
        console.log(form.depot);
        return delivery.deliveryStock.some(
          (stock) => stock.depot_id === Number(form.depot)
        );
      });
    }
    setDeliveries(arrayToReturn);
  };

  return (
    <Container>
      <GoBack />
      <PageTitle name="All deliveries" />
      {deliveryData ? (
        <FilterBox>
          <SelectInput
            name="From"
            options={fromDateList}
            onChange={onChangeForm('from')}
          ></SelectInput>
          <SelectInput
            name="To"
            options={toDateList}
            onChange={onChangeForm('to')}
          ></SelectInput>
          <SelectInput
            name="Chemicals"
            options={deliveryData.chemicals}
            onChange={onChangeForm('chemical')}
          ></SelectInput>
          <SelectInput
            name="Companies"
            options={deliveryData.companies}
            onChange={onChangeForm('company')}
          ></SelectInput>
          <SelectInput
            name="Delivery types"
            onChange={onChangeForm('deliveryType')}
            options={deliveryData.deliveryTypes}
          ></SelectInput>
          <SelectInput
            name="Drivers"
            options={deliveryData.drivers}
            onChange={onChangeForm('driver')}
          ></SelectInput>
          <SelectInput
            name="Case handler"
            options={deliveryData.users}
            onChange={onChangeForm('caseHandler')}
          ></SelectInput>
          <SelectInput
            name="Depots"
            options={Object.keys(deliveryData.depots)}
            onChange={onChangeForm('depot')}
          ></SelectInput>
        </FilterBox>
      ) : (
        ''
      )}

      <div>
        <DeliveriesTable />
        <JobsBox>
          {deliveries.length > 0 ? (
            deliveries.map((delivery, i) => {
              return (
                <TableRowDeliveries
                  key={'delivery-' + i}
                  ticketNumber={delivery.ticket_no}
                  deliveryDate={moment(delivery.date_scheduled).format(
                    'DD/MM/YY'
                  )}
                  deliveryType={delivery.deliveryType}
                  companyName={delivery.company.companyName}
                />
              );
            })
          ) : (
            <p style={{ textAlign: 'center' }}>Sorry no results</p>
          )}
        </JobsBox>
      </div>

      <BottomButton name="Find" onClick={() => onAddFilter()} />
    </Container>
  );
};

export default AllDeliveries;
