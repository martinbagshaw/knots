import { css } from 'styled-components';
import { darken } from 'polished';

const darkenFunc = (amount = 0.3, colour) => css`
  ${darken(amount, colour)}
`;

export { darkenFunc };