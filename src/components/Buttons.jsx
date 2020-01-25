import styled, { css } from 'styled-components';
import { colors, fontFamily } from '../style/styleVariables';

const buttonLinkMixin = css`
  border: 0;
  margin-top: 1rem;
  min-width: 9rem;
  padding: 1rem 2rem;
  line-height: 1;
  font-family: ${fontFamily.main};
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
  text-decoration: none;
  white-space: nowrap;
  border-radius: 0.25rem;
  cursor : pointer;
  box-sizing: border-box;
  transition: all ease-in-out 0.3s;
  background-color: ${colors.blue};
  color: ${colors.white};
  &:hover,
  &:focus {
    outline: none;
    background-color: ${colors.darkBlue};
  }
`;

const Button = styled.button`
  ${buttonLinkMixin};
`;

export { buttonLinkMixin, Button };