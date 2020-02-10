import { css } from 'styled-components';
import { darken, lighten } from 'polished';

const darkenFunc = (amount = 0.3, colour) => css`
  ${darken(amount, colour)}
`;

const lightenFunc = (amount = 0.3, colour) => css`
  ${lighten(amount, colour)}
`;

export { darkenFunc, lightenFunc };