import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
  width: 100%;
  height: 50px;

  border-radius: 50px;
  border: 0px;
  box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.13);
  font-size: 15px;
  outline: none;

  z-index: 5;
  margin-bottom: 15px;
  padding-left: 20px;
`;

const SelectInput = (props) => {
  return (
    <StyledSelect
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.onChange}
    >
      <option value={null}>{props.name}</option>
      {props.options.map((option, i) => {
        return (
          <option
            key={'option' + i}
            value={
              option.name
                ? option.name
                : option.username
                ? option.username
                : option
            }
          >
            {option.name
              ? option.name
              : option.username
              ? option.username
              : option}
          </option>
        );
      })}
    </StyledSelect>
  );
};

export default SelectInput;
