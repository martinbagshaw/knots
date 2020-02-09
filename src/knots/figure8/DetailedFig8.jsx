import React from 'react';
import styled from 'styled-components';
import { Mask, Rope } from '../common/knotStyles';

// Detailed Figure 8

// TODO / spec
// - figure out where to handle the logic (here, in routes.js, or elsewhere)
// - probably better higher up, then pass down with a context
// - write / draw a timeline of events
// - each step results in a stroke dashoffset to animate the rope
// - shape morping occurs at end when knot is dressed






const pathOne = "M 270.667 0 C 270.667 90.72 270.667 181.439 270.667 272.159 C 270.667 316.737 252.624 357.1 223.444 386.346 C 197.241 412.562 171.037 438.777 144.834 464.993 C 118.631 491.209 92.427 517.424 66.224 543.64 C 37.042 572.884 19 613.247 19 657.825 C 19 747.112 91.381 819.491 180.668 819.491";
const pathOneHover = "M 255.667 0 C 255.667 0 255.667 279.391 255.667 318.287 C 255.667 357.183 247.355 377.183 223.855 399.683 C 200.355 422.183 176.355 438.683 160.855 455.683 C 145.355 472.683 129.855 489.183 129.855 528.683 C 129.855 550.933 136.262 571.433 149.692 586.37 C 163.123 601.308 183.576 610.683 211.669 610.683";

const pathTwo = "M 181.668 819.491 C 270.954 819.491 343.333 747.112 343.333 657.825 C 343.333 584.626 221.104 499.137 221.104 499.137 C 221.104 499.137 204.824 487.742 184.23 469.678"
const pathTwoHover = "M 211.669 610.683 C 260.855 610.683 293.855 581.683 293.855 548.683 C 293.855 510.183 262.855 500.183 242.855 486.183 C 222.855 472.183 214.355 467.183 201.855 452.683";

const pathThree = "M 140.257 425.45 C 118.219 399.324 100.278 369.34 100.278 340.964 C 100.278 251.678 172.657 179.298 261.944 179.298 C 351.231 179.298 423.612 251.678 423.612 340.964 C 423.612 385.542 405.569 425.905 376.389 455.151 C 352.074 479.477 327.759 503.804 303.444 528.13";
const pathThreeHover = "M 169.187 413.851 C 158.354 399.433 152.52 385.933 152.52 367.851 C 152.52 326.851 196.354 298.183 252.604 308.433 C 308.854 318.683 322.188 350.849 319.854 376.516 C 317.52 402.183 304.854 416.516 290.854 428.516 C 276.854 440.516 270.104 447.183 257.104 465.683";

const pathFour = "M 258.712 572.905 C 252.163 579.457 245.614 586.009 239.065 592.561 C 232.517 599.113 225.968 605.665 219.419 612.217 C 190.239 641.463 172.196 681.826 172.196 726.405 L 172.202 997.42";
const pathFourHover = "M 230.521 509.516 C 230.521 509.516 224.855 517.516 219.188 524.516 C 195.855 555.849 204.196 571.826 204.196 616.404 C 204.197 679.907 204.198 743.409 204.199 806.912 L 204.202 997.419";

// const HoverFig8 = styled.svg`
//   pointer-events: none;
//   transition: 0.5s ease;
//   path {
//     transition: 0.5s ease;
//   }
// `;

const DetailedFig8 = ({ width = 500, ishovered }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      x="0px" y="0px"
      style={{
        width,
      }}
      viewBox="0 0 443.612 997.419"
      enable-background="new 0 0 443.612 997.419"
      xmlSpace="preserve">

        <Mask d={ishovered ? pathOneHover : pathOne}/>
        <Rope d={ishovered ? pathOneHover : pathOne}/>

        <Mask d={ishovered ? pathTwoHover : pathTwo}/>
        <Rope d={ishovered ? pathTwoHover : pathTwo}/>

        <Mask d={ishovered ? pathThreeHover : pathThree}/>
        <Rope d={ishovered ? pathThreeHover : pathThree}/>

        <Mask d={ishovered ? pathFourHover : pathFour}/>
        <Rope d={ishovered ? pathFourHover : pathFour}/>

    </svg>
  );
};

export default DetailedFig8;