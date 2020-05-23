import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 375px;
  height: 50px;
  border-radius: 50px 50px 0px 0px;
  background-color: #6a1b9a;
  outline: none;
  color: white;
  font-size: 20px;
  border: 0px;
`;

const ButtonPosition = styled.div`
  position: absolute;
  bottom: 35px;
  left: 0px;
`;

const BottomButton = (props) => {
  return (
    <ButtonPosition>
      <StyledButton onClick={props.onClick}>{props.name}</StyledButton>
    </ButtonPosition>
  );
};

export default BottomButton;
