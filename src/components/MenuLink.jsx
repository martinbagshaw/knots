import React from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import styled, { css } from 'styled-components';

import { darkenFunc } from '../style/styleFunctions';
import useHover from '../hooks/useHover';
import { breakpoint } from '../style/styleVariables';
import { subTitleMixin } from '../style/Typography';

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
  h2, svg {
    transition: 0.5s;
  }
`;

// change darkness depending upon knot
// - clove hitch
const KnotTitle = styled.h2`
  ${subTitleMixin};
  pointer-events: none;
  color: ${props => props.ishovered ?
    css`${darkenFunc(props.darkness, props.colour)}` : 
    props.colour};
`;

const MenuLink = ({ slug, path, SimpleSvg, colour }) => {
  const { t } = useTranslation(slug);
  const [hoverRef, isHovered] = useHover();
  const darkness = slug === 'clove-hitch' ? 0.1 : 0.2;
  return (
    <KnotLink to={path} itemcolour={colour} ref={hoverRef}>
      {SimpleSvg && <SimpleSvg ishovered={isHovered} />}
      <KnotTitle colour={colour} darkness={darkness} ishovered={isHovered}>
        {t('title')}
      </KnotTitle>
    </KnotLink>
  );
};

export default MenuLink;