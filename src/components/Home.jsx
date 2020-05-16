// home page, shows overview of knots
import React from 'react';
import styled from 'styled-components';
import routes from '../routes';
import KnotLink from './KnotLink';
import { containerMixin } from '../style/Layout';
import { breakpoint } from '../style/styleVariables';

const MenuScreen = styled.section`
  ${containerMixin};
  padding: 0;
  display: flex;
  flex-direction: column;
  @media (min-width: ${breakpoint.Xsmall}px) {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 1rem;
  }
  @media (min-width: ${breakpoint.laptop}px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(1, 1fr);
    max-height: calc(100vh - 5rem);
    height: calc(100vh - 5rem);
  }
`;

const Home = () => {
  const knots = routes.filter(item => item.path !== '/');
  return (
  <MenuScreen>
    {knots.map(({ path, ...props }) => {
      return (
        <KnotLink key={path} path={path} {...props} />
      )
    })}
  </MenuScreen>
  )
};

export default Home;
