import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: 40px;
`;

const RowData = styled.div`
  margin-top: 5px;
  display: grid;
  color: black;
  justify-items: center;
  padding: 10px 0;
  border-bottom: 1px solid grey;
  border-top: 1px solid grey;
`;

const AvailableCapacityStorage = (props) => {
  return (
    <Wrapper>
      <h3>Available Capacity</h3>
      <RowData>
        <h4>{props.capacity} barels</h4>
      </RowData>
    </Wrapper>
  );
};

export default AvailableCapacityStorage;
