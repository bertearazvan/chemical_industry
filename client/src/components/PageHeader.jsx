import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h3`
  font-family: Verdana;
  font-size: 23px;
  font-weight: 600;
  text-align: center;
  color: black;

  margin-bottom: 10px;
`;

const PageHeader = (props) => {
  return <StyledHeader>{props.header}</StyledHeader>;
};
export default PageHeader;
