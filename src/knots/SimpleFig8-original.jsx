import React from 'react';

import styled, { css, keyframes } from 'styled-components';
import { colors } from '../style/styleVariables';


// todo:
// - static version
// - different animation states depending upon step passed in

// sequence:
// - animate knot on load (whole thing)
// - animate step 1 on click (need to reset step 1 on first click, then animate)
// ...2 on click
// ...3 on click
// ...etc



// https://github.com/styled-components/styled-components/issues/14
const dash = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

const part = {
  1: css`
    animation: ${dash} 1.5095338134765625s linear forwards;
    stroke-dasharray: 1509;
    stroke-dashoffset: 1509;
  `,
  2: css`
    animation: ${dash} 0.833247802734375s linear forwards;
    stroke-dasharray: 833;
    stroke-dashoffset: 833;
  `,
  3: css`
    animation: ${dash} 0.45425347900390625s linear forwards;
    stroke-dasharray: 454;
    stroke-dashoffset: 454;
  `,
};


/* pass in number for specific animation */
const Mask = styled.path`
  stroke-width : 60;
  stroke-miterlimit: 10;
  fill: none;
  stroke : ${props => props.isActive ? colors.lightBlue : ''};
  ${props => props.isActive && props.withAnimation ? part[props.withAnimation] : ''}
`;

const Rope = styled.path`
  stroke-width : 40;
  stroke-miterlimit: 10;
  fill: none;
  stroke : ${props => props.isActive ? colors.blue : ''};
  ${props => props.isActive && props.withAnimation ? part[props.withAnimation] : ''}
`;

// animate on load
// > could delay, but it wont help onclick problem
const initial = css`
  > path:nth-child(1),
  > path:nth-child(2) {
    ${part[1]};
    /* animation-delay: 1s; */
  }
  > path:nth-child(3),
  > path:nth-child(4) {
    ${part[2]};
    animation-delay: 1.5095338134765625s;
    /* animation-delay: calc(1s + 1.5095338134765625s); */
  }
  > path:nth-child(5),
  > path:nth-child(6) {
    ${part[3]};
    animation-delay: calc(1.5095338134765625s + 0.833247802734375s);
    /* animation-delay: calc(1s + 1.5095338134765625s + 0.833247802734375s); */
  }
  > path:nth-child(1),
  > path:nth-child(3),
  > path:nth-child(5) {
    stroke : ${colors.lightBlue};
  }
  > path:nth-child(2),
  > path:nth-child(4),
  > path:nth-child(6) {
    stroke : ${colors.blue};
  }
`;


const SVG = styled.svg`
  ${props => props.firstLoad ? initial : ''}
`;


const SimpleFig8 = ({ width = 1000, stepNumber = 0 }) => {
  {console.log('fig 8', stepNumber, 'intial load', stepNumber === 0)}
  
  return (

    // making a styled componetn breaks click stuff
  <SVG
    firstLoad={stepNumber === 0}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xlink="http://www.w3.org/1999/xlink"
    x="0px" y="0px"
    style={{
      width,
      height: width
    }}
    viewBox="0 0 1000 1000"
    enableBackground="new 0 0 1000 1000"
    xmlSpace="preserve">

    {/*
    need to remove stroke on first click, then add it back in
    > perhaps this can be done in the button logic, it will be a common requirement
    */}
    <Mask
      isActive={stepNumber > 0}
      withAnimation={1}
      d="M541.89,2.733v272.16
      c0,44.578-18.043,84.941-47.223,114.187L337.446,546.373c-29.181,29.244-47.224,69.607-47.224,114.186
      c0,89.287,72.381,161.666,161.668,161.666c89.286,0,161.665-72.379,161.665-161.666c0-73.199-122.229-158.688-122.229-158.688
      s-16.28-11.394-36.874-29.458"/>
    
    <Rope
      isActive={stepNumber > 0}
      withAnimation={1}
      d="M541.89,2.733v272.16
      c0,44.578-18.043,84.941-47.223,114.187L337.446,546.373c-29.181,29.244-47.224,69.607-47.224,114.186
      c0,89.287,72.381,161.666,161.668,161.666c89.286,0,161.665-72.379,161.665-161.666c0-73.199-122.229-158.688-122.229-158.688
      s-16.28-11.394-36.874-29.458"/>

    <Mask
      isActive={stepNumber > 1}
      withAnimation={2}
      d="M410.479,428.184
      c-22.037-26.126-39.978-56.11-39.978-84.486c0-89.286,72.379-161.666,161.665-161.666c89.287,0,161.668,72.38,161.668,161.666
      c0,44.578-18.043,84.941-47.223,114.187l-72.945,72.978"/>

    <Rope
      isActive={stepNumber > 1}
      withAnimation={2}
      d="M410.479,428.184
      c-22.037-26.126-39.978-56.11-39.978-84.486c0-89.286,72.379-161.666,161.665-161.666c89.287,0,161.668,72.38,161.668,161.666
      c0,44.578-18.043,84.941-47.223,114.187l-72.945,72.978"/>

    <Mask
      isActive={stepNumber > 2}
      withAnimation={3}
      d="M528.934,575.639l-39.293,39.311
      c-29.18,29.246-47.223,69.609-47.223,114.188L442.402,1001"/>
    
    <Rope
      isActive={stepNumber > 2}
      withAnimation={3}
      d="M528.934,575.639l-39.293,39.311
      c-29.18,29.246-47.223,69.609-47.223,114.188L442.402,1001"/>
  </SVG>
);
};

export default SimpleFig8;