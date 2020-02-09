import styled from 'styled-components';
import { colors } from '../../style/styleVariables';

const Mask = styled.path`
  stroke-width : 60;
  fill: none;
  stroke: ${colors.lightBlue};
`;

const Rope = styled.path`
  stroke-width : 40;
  fill: none;
`;

const Carabiner = styled.path`
  fill : ${colors.grey};
  stroke: ${colors.lightBlue};
  stroke-width: 20;
`;

export {
  Mask, Rope, Carabiner
};