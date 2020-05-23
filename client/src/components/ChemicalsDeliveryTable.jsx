import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: 100px;
`;
const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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
