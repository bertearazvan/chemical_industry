import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: -150px;
`;
const RowName = styled.div`
  font-size: 15px;
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
      <RowName>TICKET NUMBER</RowName>
      <Row>{props.ticket}</Row>
      <RowName>ARRIVAL</RowName>
      <Row>{props.arrival}</Row>
      <RowName>TYPE</RowName>
      <Row>{props.type}</Row>
      <RowName>DRIVERS</RowName>
      <Row>{props.drivers}</Row>
      <RowName>TRUCK</RowName>
      <Row>{props.truck}</Row>
    </Wrapper>
  );
};

export default DeliveryTable;
