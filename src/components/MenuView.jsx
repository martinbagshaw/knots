// home page
// - shows overview of knots
// - more like a menu though
import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
// import { darken } from 'polished';

import routes from '../routes';
import { breakpoint } from '../style/styleVariables';
import { View } from '../style/Layout';
import { subTitleMixin } from '../style/Typography';

const MenuScreen = styled(View)`
  padding: 1rem;
  flex-direction: row;
  flex-wrap: wrap;
`;

const KnotLink = styled(Link)`
  width: 50%;
  height: 50%;
  max-width: 50vw;
  max-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-decoration: none;
  > svg {
    width: auto !important;
    height: auto !important;
  }
  @media (min-width: ${breakpoint.tablet}px) {
    width: 25%;
    max-width: 25vw;
  }
  /* &:hover svg {
    fill: darken(0.3, ${props => props.itemColour});
  } */
`;

const KnotTitle = styled.h2`
  ${subTitleMixin};
  color: ${props => props.colour};
`;

const MenuView = () => {
  const knots = routes.filter(item => item.path !== '/');
  return (
  <MenuScreen>
    {knots.map(({ path, SimpleSvg, name, colour }) => {
      return (
      <KnotLink key={path} to={path}>
        {SimpleSvg && <SimpleSvg />}
        <KnotTitle colour={colour}>{name}</KnotTitle>
      </KnotLink>
      )
    })}
  </MenuScreen>
  )
};

export default MenuView;
