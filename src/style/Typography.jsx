import styled, { css } from 'styled-components';
import { breakpoint, fontFamily } from './styleVariables';

const fontMixin = css`
  font-family: ${fontFamily.main};
  line-height: 1.5;
  font-weight: 600;
  margin: 0;
`;

const subTitleMixin = css`
  font-size: 1.5rem;
  ${fontMixin};
  @media (min-width: ${breakpoint.tablet}px) {
    font-size: 2rem;
  }
`;

const titleMixin = css`
  font-size: 2rem;
  ${fontMixin};
  @media (min-width: ${breakpoint.tablet}px) {
    font-size: 2.5rem;
  }
  @media (min-width: ${breakpoint.Xlaptop}px) {
    font-size: 3rem;
  }
`;

const contentMixin = css`
  font-size: 1rem;
  font-family: ${fontFamily.main};
  line-height: 1.5;
  font-weight: 400;
  margin: 0;
  @media (min-width: ${breakpoint.tablet}px) {
    font-size: 1.25rem;
  }
`;

const Title = styled.h1`
  ${subTitleMixin};
  margin-bottom: 0.5rem;
`;

const Paragraph = styled.p`
  ${contentMixin};
  margin-bottom: 0.5rem;
`;

export { subTitleMixin, titleMixin, contentMixin, Title, Paragraph };