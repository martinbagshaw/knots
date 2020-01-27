// home page
// - shows overview of knots
// - more like a menu though
import React from 'react';
import styled from 'styled-components';
import routes from '../routes';
import MenuLink from './MenuLink';
import { View } from '../style/Layout';

const MenuScreen = styled(View)`
  padding: 1rem;
  flex-direction: row;
  flex-wrap: wrap;
`;

const MenuView = () => {
  const knots = routes.filter(item => item.path !== '/');
  return (
  <MenuScreen>
    {knots.map(({ path, ...props }) => {
      return (
        <MenuLink key={path} path={path} {...props} />
      )
    })}
  </MenuScreen>
  )
};

export default MenuView;
