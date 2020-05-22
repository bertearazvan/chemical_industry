import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  height: 50px;

  border-radius: 50px;
  border: 0px;
  box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.13);
  font-size: 15px;
  outline: none;

  z-index: 5;
  margin-bottom: 10px;
  padding-left: 20px;
`;

const Input = (props) => {
  return (
    <StyledInput
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
};

export default Input;
