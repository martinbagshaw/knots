import React from 'react';
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import styled, { css } from 'styled-components';

import { darkenFunc } from '../style/styleFunctions';
import useHover from '../hooks/useHover';
import { subTitleMixin } from '../style/Typography';

const AnchorLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-decoration: none;
  > svg {
    width: auto !important;
    height: auto !important;
  }
  h2, svg {
    transition: 0.5s;
  }
  width: 100%;
  max-height: 20rem;
  margin-top: 1rem;
`;

// change darkness depending upon knot
// - clove hitch
const KnotTitle = styled.h2`
  ${subTitleMixin};
  pointer-events: none;
  color: ${props => props.ishovered ?
    css`${darkenFunc(props.darkness, props.color)}` : 
    props.color};
`;

const KnotLink = ({ slug, path, SimpleSvg, color }) => {
  const { t } = useTranslation(slug);
  const [hoverRef, isHovered] = useHover();
  const darkness = slug === 'clove-hitch' ? 0.1 : 0.2;
  return (
    <AnchorLink to={path} itemcolor={color} ref={hoverRef}>
      {SimpleSvg && <SimpleSvg ishovered={isHovered} />}
      <KnotTitle color={color} darkness={darkness} ishovered={isHovered}>
        {t('title')}
      </KnotTitle>
    </AnchorLink>
  );
};

export default KnotLink;