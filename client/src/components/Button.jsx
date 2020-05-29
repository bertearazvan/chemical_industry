import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  height: 50px;

  color: white;
  font-size: 18px;
  background-color: #6c49b8;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  text-align: left;
  padding-left: 2rem;

  box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.13);
  border-radius: 50px;
  border: 0px;
  outline: none;
  margin-bottom: 15px;
`;

const Button = (props) => {
  return <StyledButton onClick={props.onClick}>{props.name}</StyledButton>;
};

export default Button;
