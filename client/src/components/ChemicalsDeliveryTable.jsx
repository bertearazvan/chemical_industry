import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 315px;
  height: auto;
  margin-top: 50px;
`;
const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1.5fr) 1fr;
  justify-items: center;
  border-bottom: 1px solid grey;
`;
const TableName = styled.h5`
  font-size: 10px;
  color: grey;
`;

const ChemicalsDeliveryTable = (props) => {
  return (
    <Wrapper>
      <Row>
        <TableName>CHEMICAL</TableName>
        <TableName>QUANTITY</TableName>
        <TableName>WAREHOUSE</TableName>
        <TableName>ISLE</TableName>
      </Row>
    </Wrapper>
  );
};

export default ChemicalsDeliveryTable;
