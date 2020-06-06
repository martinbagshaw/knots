// KnotView
// - contains knot and content
// - state for each step is custom, and specific to the route
// - ideally handle routing here for individual steps
// - think about architecture

// routing
// - needs to be handled higher up
// - forward and backward steps change links
// - each link contains an animation
// - disable forward link until animation is complete
// - back link to run animation backwards

// animations
// - one animation must end before the next starts
// - if attached to the route, we must immediately flick animation to start / finish
// ... of the previous, when switching

// implementation
// - subscribe to a context, based on slug
// - from context, we get the state to display according to the route, e.g. /figure-8/step{1}/
// - context gives us all the animation instructions
// - if an animation is running (store in local state), we disable route change (increment)

// https://stackoverflow.com/questions/34343085/react-router-creating-nested-routes-with-no-component-nesting

// notes / lessons learnt:
// https://github.com/i18next/react-i18next/issues/735
// https://github.com/gaearon/react-hot-loader/issues/620

import React from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { darkenFunc } from '../style/styleFunctions';
import { buttonLinkMixin } from './Buttons';
import Chevron from './Chevron';
import { View } from '../style/Layout';
import { Title, Paragraph } from '../style/Typography';
import { breakpoint, colors } from '../style/styleVariables';

const Content = styled.article`
  padding: 1rem 1rem 1.5rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: ${colors.white};
  z-index: 1;
  @media (min-width: ${breakpoint.tablet}px) {
    flex: 1;
    max-width: calc(50% - 1rem);
    margin-right: 1rem;
    padding: 1.5rem;
  }
`;

const KnotContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  @media (min-width: ${breakpoint.tablet}px) {
    flex: 1;
    max-width: calc(50% - 1rem);
    margin-left: 1rem;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PrevLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  ${buttonLinkMixin};
  margin-right: 1rem;
  ${props => props.color && `
    background-color: ${props.color};
  `}
  ${props => props.hovercolor && `
    &:hover,
    &:focus {
      background-color: ${props.hovercolor}
    }
  `}
`;

const NextLink = styled(PrevLink)`
  ${props => props.isblack && `
    background-color: ${colors.black};
    &:hover,
    &:focus {
      background-color: ${colors.blackGrey};
    }
  `};
  span {
    margin-right: 1rem;
  }
`;

const KnotView = ({ slug, DetailedSvg, knotWidth, stepCount, color }) => {

  const { t } = useTranslation(['common', slug]);

  const { pathname } = useLocation();
  const stepString = pathname.match(/.*\/(.*)/)[1];
  const step = parseInt(stepString) ? parseInt(stepString) : 0;

  const title = step === 0 ? t(`${slug}:title`) : t(`common:steps.${step}`);
  const paragraph = step === 0 ? t(`${slug}:overview.paragraph`) : t(`${slug}:steps.${step}`);

  const prevLink = step > 1 ? `/${slug}/${step - 1}` : `/${slug}`;
  const nextLink = step < stepCount ? `/${slug}/${step + 1}` : '/';
  const nextText = step < stepCount ? `Step ${step + 1}` : t('common:back');

  const darkness = slug === 'clovehitch' ? 0.1 : 0.2;
  const hovercolor = darkenFunc(darkness, color)[1];

  return (
    <View isReverse>
      <Content>
        <Title>{title}</Title>
        <Paragraph>{paragraph}</Paragraph>

        <LinkContainer>
          {step > 0 &&
            <PrevLink to={prevLink} hovercolor={hovercolor} color={color}>
              <Chevron width={15} stroke='white' titleTag={t('common:prev')} />
            </PrevLink>
          }
          
          <NextLink
            to={nextLink}
            hovercolor={hovercolor}
            color={color}
            isblack={step === stepCount ? true : undefined}>
            <span>{nextText}</span>
            {step < stepCount &&
              <Chevron direction='right' width={15} stroke='white' titleTag={t('common:next')} />
            }
          </NextLink>
        </LinkContainer>
          
      </Content>
      {DetailedSvg &&
        <KnotContainer>
          <DetailedSvg width={knotWidth} stepNumber={step}/>
        </KnotContainer>
      }
    </View>
  );
};

export default KnotView;