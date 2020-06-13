import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: -180px;
`;
const RowName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: grey;
  border-bottom: 1px solid grey;
`;

const Row = styled.div`
  font-size: 13px;
  color: black;
  margin-bottom: 10px;
`;

const DeliveryTable = (props) => {
  return (
    <Wrapper>
      <RowName data-cy="row-name">TICKET NUMBER</RowName>
      <Row data-cy="row-data">{props.ticket}</Row>
      <RowName data-cy="row-name">ARRIVAL</RowName>
      <Row data-cy="row-data">{props.arrival}</Row>
      <RowName data-cy="row-name">TYPE</RowName>
      <Row data-cy="row-data">{props.type}</Row>
      <RowName data-cy="row-name">DRIVERS</RowName>
      <Row data-cy="row-data">{props.drivers}</Row>
      <RowName data-cy="row-name">TRUCK</RowName>
      <Row data-cy="row-data">{props.truck}</Row>
    </Wrapper>
  );
};

export default DeliveryTable;
