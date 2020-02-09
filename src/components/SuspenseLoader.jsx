import React from 'react';
import styled from 'styled-components';
import { colors } from '../style/styleVariables'
import { View } from '../style/Layout';
import { titleMixin } from '../style/Typography';

const LoadingScreen = styled(View)`
  padding: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Dots = styled.div`
  width: 3.5em;
  display: flex;
  margin: 20px;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  div {
    width: 0.8em;
    height: 0.8em;
    border-radius: 50%;
    background-color: ${colors.blue};
    animation: fade 0.8s ease-in-out alternate infinite;
  }

  div:nth-of-type(1) {
    animation-delay: -0.4s;
  }

  div:nth-of-type(2) {
    animation-delay: -0.2s;
  }

  @keyframes fade {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

const Text = styled.p`
  ${titleMixin};
  color: ${colors.blue};
`;

const SuspenseLoader = () => {
  return (
    <LoadingScreen>
      <Dots>
        <div></div>
        <div></div>
        <div></div>
      </Dots>
      <Text>Loading...</Text>
    </LoadingScreen>
  );
};

export default SuspenseLoader;
