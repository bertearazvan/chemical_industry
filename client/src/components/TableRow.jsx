import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: 15px;
`;
const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  border-bottom: 1px solid grey;
`;

const TableRowStyled = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: grey;
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
