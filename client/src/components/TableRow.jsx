import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 315px;
  height: auto;
  margin-top: 15px;
`;
const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1.5fr) 1fr;
  justify-items: center;
  border-bottom: 1px solid grey;
`;

const TableRowStyled = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: black;
`;

const TableRow = (props) => {
  return (
    <Wrapper>
      <Row>
        <TableRowStyled>{props.chemical}</TableRowStyled>
        <TableRowStyled>{props.quantity}</TableRowStyled>
        <TableRowStyled>{props.warehouse}</TableRowStyled>
        <TableRowStyled>{props.isle}</TableRowStyled>
      </Row>
    </Wrapper>
  );
};

export default TableRow;
