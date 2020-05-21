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
`;

const Button = (props) => {
  return <StyledButton onClick={props.onClick}>{props.name}</StyledButton>;
};

export default Button;
