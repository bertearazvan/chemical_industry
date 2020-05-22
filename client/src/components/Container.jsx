import React from 'react';
import styled from 'styled-components';

const StyledDivWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #6a1b9a;
`;

const StyledDiv = styled.div`
  height: 91%;
  width: 100%;
  position: absolute;
  top: 110px;

  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;

  border-radius: 50px;
  background-color: white;

  z-index: 1;
`;

const StyledDivContent = styled.div`
  width: 315px;
`;

const Container = (props) => {
  return (
    <StyledDivWrapper>
      <StyledDiv>
        <StyledDivContent>{props.children}</StyledDivContent>
      </StyledDiv>
    </StyledDivWrapper>
  );
};

export default Container;
