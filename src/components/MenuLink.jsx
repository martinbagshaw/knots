import React from 'react';
import { Link } from "react-router-dom";
import styled, { css } from 'styled-components';
import { darken } from 'polished';

import useHover from '../hooks/useHover';
import { breakpoint } from '../style/styleVariables';
import { subTitleMixin } from '../style/Typography';

const darkenFunc = (amount = 0.3, colour) => css`
  ${darken(amount, colour)}
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
  h2, svg {
    transition: 0.5s;
  }
  :hover svg path:nth-child(even) {
    stroke: ${props => props.itemcolour && css`${darkenFunc(0.2, props.itemcolour)}`};
  }
  :hover h2 {
    color: ${props => props.itemcolour && css`${darkenFunc(0.2, props.itemcolour)}`};
  }
`;

const KnotTitle = styled.h2`
  ${subTitleMixin};
  color: ${props => props.colour};
  pointer-events: none;
`;

const MenuLink = ({ path, SimpleSvg, name, colour }) => {
  const [hoverRef, isHovered] = useHover();
  return (
    <KnotLink to={path} itemcolour={colour} ref={hoverRef}>
      {SimpleSvg && <SimpleSvg ishovered={isHovered} />}
      <KnotTitle colour={colour}>{name}</KnotTitle>
    </KnotLink>
  );
}

export default MenuLink;