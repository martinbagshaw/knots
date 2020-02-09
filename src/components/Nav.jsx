import React from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { containerMixin } from '../style/Layout';
import { subTitleMixin } from '../style/Typography';
import Chevron from '../components/Chevron';
import { colors } from '../style/styleVariables';

const NavBar = styled.div`
  height: 5rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  background-color: ${colors.white};
  box-shadow: 0.25rem 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
`;

const NavContainer = styled.nav`
  ${containerMixin};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  ${subTitleMixin};
  color: ${colors.black};
`;

const NavLink = styled(Link)`
  color: ${props => props.colour};
  text-decoration: none;
  padding-left: 0.5rem;
`;

const BackLink = styled(Link)`
  color: transparent;
  text-decoration: none;
  padding-right: 1rem;
  display: flex;
`;

const Nav = ({ slug, path, colour }) => {
  const { t } = useTranslation(['common', slug]);
  const subTitle = slug === 'menu' ? t('common:subtitle') : t(`${slug}:title`);
  return (
    <NavBar>
      <NavContainer>
        {path !== '/' && <BackLink to='/'><Chevron direction="left"/></BackLink>}
        {t('common:title')} | <NavLink to={path} colour={colour}>{subTitle}</NavLink>
      </NavContainer>
    </NavBar>
  );
};

export default Nav;