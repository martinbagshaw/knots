// https://github.com/styled-components/styled-components/issues/14
import React, { Fragment } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { colors } from '../style/styleVariables';

// todo:
// - first 3 steps as 1 (or part 1 - tieing the original knot)
// - add other steps to svg
// - different animation states depending upon step passed in

// sequence:
// - animate knot on load (whole thing)
// - animate step 1 on click (need to reset step 1 on first click, then animate)
// ...2 on click
// ...3 on click
// ...etc

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
  ${props => props.animationNumber && part[props.animationNumber]};
`;

const Rope = styled.path`
  stroke-width : 40;
  stroke-miterlimit: 10;
  fill: none;
  ${props => props.animationNumber && part[props.animationNumber]};
`;


const Figure8 = ({ width = 1000, stepNumber = null }) => {
  
  console.log('fig 8 stepNumber', stepNumber);


  // !stepNumber, add stokes and fills

  // - no stepnumber, all masks and ropes have their strokes
  // - if stepnumber === 0, no strokes on any
  // - if stepnumber === 1, strokes and animations on part 1 mask and rope
  // ... etc

  // could save path data elsewhere, and pick it out in a universal svg
  // - might not work with carabiners in clove and italian hitch

  const maskStroke = colors.lightBlue;
  const ropeStroke = colors.blue;

  
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      x="0px" y="0px"
      style={{
        width,
      }}
      viewBox="0 0 1000 1000"
      enableBackground="new 0 0 1000 1000"
      xmlSpace="preserve">

      {(!stepNumber || stepNumber > 0) && 
        <Fragment>
          <Mask
          stroke={maskStroke}
          animationNumber={stepNumber > 0 && 1}
          d="M541.89,2.733v272.16c0,44.578-18.043,84.941-47.223,114.187L337.446,546.373c-29.181,29.244-47.224,69.607-47.224,114.186c0,89.287,72.381,161.666,161.668,161.666c89.286,0,161.665-72.379,s-16.28-11.394-36.874-29.458"/>
        
        <Rope
          stroke={ropeStroke}
          animationNumber={stepNumber > 0 && 1}
          d="M541.89,2.733v272.16c0,44.578-18.043,84.941-47.223,114.187L337.446,546.373c-29.181,29.244-47.224,69.607-47.224,114.186c0,89.287,72.381,161.666,161.668,161.666c89.286,0,161.665-72.379,161.665-161.666c0-73.199-122.229-158.688-122.229-158.688s-16.28-11.394-36.874-29.458"/>
        </Fragment>
      }

      {(!stepNumber || stepNumber > 1) &&
        <Fragment>
          <Mask
            stroke={maskStroke}
            animationNumber={stepNumber > 1 && 2}
            d="M410.479,428.184c-22.037-26.126-39.978-56.11-39.978-84.486c0-89.286,72.379-161.666,161.665-161.666c89.287,0,161.668,72.38,161.668,161.666c0,44.578-18.043,84.941-47.223,114.187l-72.945,72.978"/>

          <Rope
            stroke={ropeStroke}
            animationNumber={stepNumber > 1 && 2}
            d="M410.479,428.184c-22.037-26.126-39.978-56.11-39.978-84.486c0-89.286,72.379-161.666,161.665-161.666c89.287,0,161.668,72.38,161.668,161.666c0,44.578-18.043,84.941-47.223,114.187l-72.945,72.978"/>
        </Fragment>
      }

      {(!stepNumber || stepNumber > 2) &&
        <Fragment>
          <Mask
            stroke={maskStroke}
            animationNumber={stepNumber > 2 && 3}
            d="M528.934,575.639l-39.293,39.311c-29.18,29.246-47.223,69.609-47.223,114.188L442.402,1001"/>
          
          <Rope
            stroke={ropeStroke}
            animationNumber={stepNumber > 2 && 3}
            d="M528.934,575.639l-39.293,39.311c-29.18,29.246-47.223,69.609-47.223,114.188L442.402,1001"/>
        </Fragment>
      }
    </svg>
  );
};

export default Figure8;