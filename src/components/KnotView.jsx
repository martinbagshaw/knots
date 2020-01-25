// KnotView
// - contains knot and content
// - handles state for steps
// - could be split up more as this gets more complex
// - ideally handle routing here for individual steps

// TODO:
// - think about architecture a bit:

// routing
// - probably needs to be handled higher up
// - forward and backward steps change links
// - each link contains an animation


// animations
// - one animation must end before the next starts
// - if attached to the route, we must immediately flick animation to start / finish
// ... of the previous, when switching
// - may be best to store animations within knot jsx
// - try to get common animations in the same file though.
// - use simple for overview, and detailed for animations?



import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { buttonLinkMixin, Button } from './Buttons';
// import Chevron from './Chevron';
import { View } from '../style/Layout';
import { Title, Paragraph } from '../style/Typography';
import { breakpoint, colors } from '../style/styleVariables';

const Info = styled.article`
  padding: 1rem 1rem 1.5rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: ${colors.white};
  @media (min-width: ${breakpoint.tablet}px) {
    flex: 1;
    max-width: calc(50% - 1rem);
    margin-right: 1rem;
    padding: 1.5rem;
  }
`;

const Knot = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  @media (min-width: ${breakpoint.tablet}px) {
    flex: 1;
    max-width: calc(50% - 1rem);
    margin-left: 1rem;
  }
`;

const StepLink = styled(Link)`
  ${buttonLinkMixin};
  /* ${props => props.isBlack && `background-color: ${colors.black}`};
  &:hover,
  &:focus {
    ${props => props.isBlack && `background-color: ${colors.black}`};
  } */
`;

const StepButton = styled(Button)`
  ${buttonLinkMixin};
  /* ${props => props.isBlack && `background-color: ${colors.black}`};
  &:hover,
  &:focus {
    ${props => props.isBlack && `background-color: ${colors.black}`};
  } */
`;

// TODO:
// 1. disable button until animation has run

// 2.
// - routing of steps (need to handle this is App and routes.js)
// - hard to achieve with animations perhaps
// - more on this:
// https://stackoverflow.com/questions/34343085/react-router-creating-nested-routes-with-no-component-nesting



const KnotView = ({ name, content, DetailedSvg, knotWidth, stepCount }) => {

  const [step, getStep] = useState(0);
  console.log('[content.jsx] step', step);

  // const showBackButton
  // const showStepButton

  // stepCount in route, not button
  // <Chevron direction="left"/>

  return (
    <View isReverse>
      <Info>
        <Title>{step === 0 ? name : `Step ${step}`}</Title>
        <Paragraph>{step === 0 ? content.intro : content[`step${step}`]}</Paragraph>
        
        {/* <StepLink to={`figure-8/step-${step + 1}`}>{`Step ${step + 1}`}
          <Chevron fill="white"/>
        </StepLink> */}

        <StepButton
          onClick={() => step < stepCount ? getStep(step + 1) : null}
          isBlack={step === stepCount}>
          {step < stepCount ? `Step ${step + 1}` : 'Back to Knots' }
          </StepButton>
          
      </Info>
      {DetailedSvg &&
        <Knot>
          <DetailedSvg width={knotWidth} stepNumber={step}/>
        </Knot>
      }
    </View>
  );
};

export default KnotView;