import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: -230px;
`;

const RowName = styled.div`
  margin-top: 5px;
  display: grid;
  color: grey;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  border-top: 1px solid grey;
  padding-top: 10px;
`;

const RowData = styled.div`
  margin-top: 5px;
  padding-bottom: 10px;
  display: grid;
  color: black;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  border-bottom: 1px solid grey;
`;

const MaxCapacityStorage = (props) => {
  return (
    <Wrapper>
      <h3>Maximum Capacity</h3>
      <RowName>
        <h5>WAREHOUSE</h5>
        <h5>CAPACITY</h5>
      </RowName>
      <RowData>
        <h4>{props.warehouse}</h4>
        <h4>{props.capacity} barels</h4>
      </RowData>
    </Wrapper>
  );
};

export default MaxCapacityStorage;
