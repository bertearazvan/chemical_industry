import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const GoBackStyle = styled.div`
  position: absolute;
  top: -70px;
  z-index: 10;
`;

const Arrow = styled.i`
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(135deg);
`;

const GoBack = () => {
  const history = useHistory();
  return (
    <GoBackStyle onClick={() => history.goBack()}>
      <Arrow />
    </GoBackStyle>
  );
};

export default GoBack;
