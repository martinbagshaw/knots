import styled from 'styled-components';
import { colors } from '../../style/styleVariables';

const Mask = styled.path`
  stroke-width : 60;
  stroke-miterlimit: 10;
  fill: none;
  stroke: ${colors.lightBlue};
`;

const Rope = styled.path`
  stroke-width : 40;
  stroke-miterlimit: 10;
  fill: none;
  stroke: ${colors.blue};
`;

export { Mask, Rope };