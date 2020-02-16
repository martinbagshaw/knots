import React, { Fragment } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { colors } from '../style/styleVariables';
const {
  green, grey, white, black, blue, red, mint,
  purple, oliveGreen, orange, lightBlue, darkBlue, frontBlue, backBlue } = colors;

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
  stroke-width : 50;
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


const Fig8Detailed = ({ width = 600, stepNumber = null }) => {
  
  // console.log('fig 8 detailed');
  // console.log('stepNumber', stepNumber);

  // TODO
  // - split out parts of fig-8-detailed.svg and render on the page
  // - may require more parts for animation to work ok
  // - no z-index
  // - what is on the bottom is on the top
  // - think of pairing of front and back strands of rope
  // - from this, work out what can be split out
  // - id# currently shows step number

  const maskStroke = lightBlue;
  const ropeStroke = blue;
  const harnessStroke = black;

  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      x="0px" y="0px"
      style={{
        width,
      }}
      viewBox="0 0 604.147 1249.036"
      enableBackground="new 0 0 604.147 1249.036"
      xmlSpace="preserve">


    



    <path id="4" fill="none" stroke={mint} strokeWidth="40" strokeMiterlimit="10" d="M522.737,1128.647
      c-29.976,26.748-86.563,45.836-169.926,47.923"/>

    <path id="7" fill="none" stroke={darkBlue} strokeWidth="40" strokeMiterlimit="10" d="M290.421,0.096v273.472
      c0,44.578-18.043,84.941-47.223,114.187L85.224,557.307C56.042,586.551,38,626.915,38,671.493
      c0,56.25,57.42,124.666,130.668,124.666c72.086,0,150.665-39.379,150.665-128.666c0-80.084-111.228-154.688-111.228-154.688
      s-28.517-20.729-38.017-30.063"/>


    {/* <Mask id="1-base" stroke={lightBlue} d="M271.667,0v272.16
      c0,44.578-18.043,84.941-47.223,114.187L67.224,543.64C38.042,572.884,20,613.248,20,657.826
      c0,89.287,72.381,161.666,161.668,161.666c89.286,0,161.665-61.583,161.665-161.666c0-73.199-122.229-158.688-122.229-158.688
      s-28.517-20.729-38.017-30.063"/> */}
      
    <Rope id="1" stroke={frontBlue} d="M271.667,0v272.16
      c0,44.578-18.043,84.941-47.223,114.187L67.224,543.64C38.042,572.884,20,613.248,20,657.826
      c0,89.287,72.381,161.666,161.668,161.666c89.286,0,161.665-61.583,161.665-161.666c0-73.199-122.229-158.688-122.229-158.688
      s-28.517-20.729-38.017-30.063"/>



    <path id="6" fill="none" stroke={purple} strokeWidth="40" strokeMiterlimit="10" d="M126.733,443.159
      c-25.878-26.906-52.025-79.667-52.025-125.881c0-87.536,98.759-168.869,197.236-168.869s181.238,95.426,181.238,187.236
      c0,54.264-5.762,90.264-53.558,138.415c-50.203,50.35-76.06,76.1-76.06,76.1"/>

    <path id="2" fill="none" stroke={red} strokeWidth="40" strokeMiterlimit="10" d="M141.254,429.241
      c-25.167-26.167-40.976-56.333-40.976-101.277c0-75.556,72.379-148.666,161.666-148.666s161.668,72.38,161.668,161.666
      c0,44.578-18.043,84.941-47.223,114.187l-73.969,74.008"/>


    {/* LEFT BUCKLE: this needs to be split into 2: */}
    {/* 2nd part goes behind mint */}
    <path fill="none" stroke={grey} strokeWidth="50" strokeLinecap="round" strokeMiterlimit="10" d="M95.624,1221.036
      c0,0,131.318-324.546,279.523,0"/>


    <path id="5" fill="none" stroke={green} strokeWidth="40" strokeMiterlimit="10" d="M280.754,592.408l-37.24,37.585
      c-25.694,25.753-41.582,61.294-41.582,100.548l0.488,152.868c0,140,65.667,163.667,123,143.667
      c95.334-40,222.667-24.667,222.667,50.666c0,18.257-8.411,35.754-25.26,50.825"/>

    <path id="3" fill="none" stroke={orange} strokeWidth="40" strokeMiterlimit="10" d="M352.672,1176.576
      c-4.996,0.125-10.088,0.188-15.276,0.188c-108.475,0-165.194-74.855-165.194-179.345s-0.006-271.015-0.006-271.015
      c0-44.578,18.043-84.941,47.223-114.188l40.669-40.142"/>


    {/* RIGHT BUCKLE: */}
    <path fill="none" stroke={grey} strokeWidth="50" strokeLinecap="round" strokeMiterlimit="10" d="M299.624,1224.036
      c0,0,131.318-324.546,279.523,0"/>


    

      {/* {(!stepNumber || stepNumber > 0) && 
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
      } */}

      {/* {(!stepNumber || stepNumber > 1) &&
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
      } */}

      {/* {(!stepNumber || stepNumber > 2) &&
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
      } */}
    </svg>
  );
};

export default Fig8Detailed;