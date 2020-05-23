import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h3`
  font-size: 23px;
  font-weight: 600;
  text-align: center;
  color: black;

  margin-bottom: 20px;
`;

const PageHeader = (props) => {
  return <StyledHeader>{props.name}</StyledHeader>;
};
export default PageHeader;
