import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h3`
  font-size: 20px;
  font-weight: 600;
  text-align: left;
  color: black;

  margin-left: 1rem;
  margin-bottom: 20px;
`;

const PageHeader = (props) => {
  return <StyledHeader data-cy="header">{props.name}</StyledHeader>;
};
export default PageHeader;
