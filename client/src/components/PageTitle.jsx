import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  top: -70px;
  left: 0;
`;

const StyledPageTitle = styled.h4`
  position: relative;
  text-align: center;
  font-size: 20px;
  color: white;
`;

const PageTitle = (props) => {
  return (
    <Wrapper>
      <StyledPageTitle data-cy="title">{props.name}</StyledPageTitle>
    </Wrapper>
  );
};

export default PageTitle;
