import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 315px;
  height: auto;
`;
const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1.5fr);
  justify-items: center;
  border-bottom: 1px solid grey;
`;

const TableRowStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 600;
  color: black;
  height: 50px;
  overflow-x: scroll;
  width: 70px;
  margin-right: 10px;
  white-space: nowrap;
  justify-content: flex-start;
`;

const TableRow = (props) => {
  const history = useHistory();
  const onGetDelivery = (ticketNumber) => {
    console.log(ticketNumber);
    history.push(`/ticket-details/${ticketNumber}`);
  };

  return (
    <Wrapper
      className="deliveryItem"
      onClick={() => onGetDelivery(props.ticketNumber)}
    >
      <Row>
        <TableRowStyled>{props.ticketNumber}</TableRowStyled>
        <TableRowStyled>{props.deliveryDate}</TableRowStyled>
        <TableRowStyled>{props.deliveryType}</TableRowStyled>
        <TableRowStyled>{props.companyName}</TableRowStyled>
      </Row>
    </Wrapper>
  );
};

export default TableRow;
