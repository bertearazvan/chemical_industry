import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { checkCreate } from '../networking/deliveries';

import PageHeader from '../components/PageHeader';
import PageTitle from '../components/PageTitle';
import Container from '../components/Container';
import GoBack from '../components/GoBack';
import BottomButton from '../components/BottomButton';
import Input from '../components/Input';

const SelectChemicals = () => {
  const history = useHistory();
  const location = useLocation();
  const deliveryType = location.state.deliveryType;
  const delivery = location.state.delivery;
  const companyID = location.state.companyID;
  const driver = location.state.driver;
  const truck = location.state.truck;

  const [chemicalAAmount, setChemicalAAmount] = useState();
  const [chemicalBAmount, setChemicalBAmount] = useState();
  const [chemicalCAmount, setChemicalCAmount] = useState();
  const [chemicalAName] = useState('Chemical A');
  const [chemicalBName] = useState('Chemical B');
  const [chemicalCName] = useState('Chemical C');
  const [chemicalAID] = useState(1);
  const [chemicalBID] = useState(2);
  const [chemicalCID] = useState(3);

  const chemicals = [
    {
      chemical: chemicalAName,
      storage: parseInt(chemicalAAmount),
      id: chemicalAID,
    },
    {
      chemical: chemicalBName,
      storage: parseInt(chemicalBAmount),
      id: chemicalBID,
    },
    {
      chemical: chemicalCName,
      storage: parseInt(chemicalCAmount),
      id: chemicalCID,
    },
  ];

  const getData = async () => {
    try {
      const { data } = await checkCreate({ chemicals, deliveryType });
      history.push('/finalize-job', {
        deliveryType,
        companyID,
        driver,
        truck,
        delivery,
        data,
      });
    } catch (err) {
      if (err) {
        console.log(err.message);
      }
    }
  };
  return (
    <Container>
      <GoBack />
      <PageTitle name="Create Job Chemicals" />
      <PageHeader name="Insert Chemicals" />

      <Input
        type="number"
        placeholder="Amount Chemical A"
        onChange={(e) => setChemicalAAmount(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Amount Chemical B"
        onChange={(e) => setChemicalBAmount(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Amount Chemical C"
        onChange={(e) => setChemicalCAmount(e.target.value)}
      />
      <BottomButton name="Insert" onClick={getData} />
    </Container>
  );
};

export default SelectChemicals;
