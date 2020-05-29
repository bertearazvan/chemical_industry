import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 50px 50px 0px 0px;
  background-color: #6c49b8;
  box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.13);
  outline: none;
  color: white;
  font-size: 20px;
  border: 0px;
`;

const ButtonPosition = styled.div`
  position: absolute;
  bottom: 35px;
  left: 0px;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  width: 375px;
  margin: auto;
`;

const BottomButton = (props) => {
  return (
    <ButtonPosition>
      <ButtonWrapper>
        <StyledButton onClick={props.onClick}>{props.name}</StyledButton>
      </ButtonWrapper>
    </ButtonPosition>
  );
};

export default BottomButton;
