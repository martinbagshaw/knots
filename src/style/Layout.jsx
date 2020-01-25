import styled, { css } from 'styled-components';
import { breakpoint } from './styleVariables';

const containerMixin = css`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 1rem;
  box-sizing: border-box;
`;

const View = styled.section`
  ${containerMixin};
  padding: 0;
  max-height: calc(100vh - 5rem);
  height: calc(100vh - 5rem);
  display: flex;
  flex-direction: column-reverse;
  @media only screen and (min-width: ${breakpoint.tablet}px) {
    padding: 1rem;
    flex-direction: row;
    align-items: center;
  }
`;

export { containerMixin, View };