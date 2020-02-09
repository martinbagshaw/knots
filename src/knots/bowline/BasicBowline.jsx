import React from 'react';
import styled from 'styled-components';
import { Mask, Rope } from '../common/knotStyles';
import { colors } from '../../style/styleVariables';

const pathOne = "M 214.054 0 C 214.054 68.019 214.054 136.039 214.054 204.058 C 216.531 236.327 207.065 315.808 149.382 375.579 C 77.279 450.293 22.448 500.103 20.038 609.563 C 17.628 719.023 129.498 821.052 214.054 821.052 C 298.609 821.052 408.07 796.147 408.07 649.33";
const pathOneHover = "M 134.054 0 C 134.054 0 134.054 242 134.054 299.5 C 134.054 357 124 377.5 77 424.5 C 30 471.5 20 500.5 20 543.5 C 20 586.5 52.5 649.33 134.054 649.33 C 215.608 649.33 248 598 248 559";

const pathTwo = "M 408.07 649.33 C 408.07 502.513 328.586 495.082 271.295 495.082 C 203.911 495.082 141.097 545.644 95.129 632.51 C 49.161 719.375 20.038 842.543 20.038 987.753"
const pathTwoHover = "M 248 559 C 248 520 191.345 483.5 134.054 483.5 C 69.451 483.5 18 545 28 655 C 38 765 84.5 850 84.5 987.753";

const pathThree = "M 175.693 770 C 175.693 806.459 175.693 842.918 175.693 879.376 L 175.693 988.753";
const pathThreeHover = "M 105.286 553.5 C 111.169 575.247 115 599.775 115 628 L 115 987.753";

const pathFour = "M 175.9 769.947 C 175.9 700.455 162.689 646.249 145.074 599.259 C 127.459 552.269 105.441 512.495 87.826 471.865 C 70.211 431.235 57 389.749 57 339.337";
const pathFourHover = "M 105.286 554 C 85.844 482.133 44 440.643 44 396.5 C 44 396.421 44 396.343 44 396.264 C 44 362.154 58.077 331.387 80.5 312";

const pathFive = "M 57 339.337 C 57 265.077 100.985 164 214.261 164 C 334.165 164 370.317 267.473 370.317 339.337";
const pathFiveHover = "M 80 312.236 C 95.376 298.942 114.676 291 136.054 291 C 157.432 291 177.045 298.942 192.792 312.236";

const pathSix = "M 369.9 340 C 369.9 390.412 356.689 431.898 339.074 472.528 C 321.459 513.158 299.441 552.932 281.826 599.922 C 264.211 646.912 251 701.118 251 770.61";
const pathSixHover = "M 192.75 312.25 C 215.715 331.637 230.458 362.404 230.458 396.514 C 230.459 396.526 230.459 396.538 230.46 396.55 C 230.46 440.161 189.12 482.284 169.25 552.25";

const pathSeven = "M 251 771 C 251 807.459 251 843.918 251 880.376 L 251 989.753";
const pathSevenHover = "M 170.429 552 C 164.141 574.221 160 599.243 160 628 L 160 987.753";

const HoverBowline = styled.svg`
  pointer-events: none;
  transition: 0.5s ease;
  path {
    transition: 0.5s ease;
  }
`;

const PurpleRope = styled(Rope)`
  stroke: ${colors.purple};
`;

const BasicBowline = ({ width = 500, ishovered }) => {
  return (
    <HoverBowline
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

        <Mask d={ishovered ? pathFiveHover : pathFive}/>
        <PurpleRope d={ishovered ? pathFiveHover : pathFive}/>

        <Mask d={ishovered ? pathThreeHover : pathThree}/>
        <PurpleRope d={ishovered ? pathThreeHover : pathThree}/>

        <Mask d={ishovered ? pathSevenHover : pathSeven}/>
        <PurpleRope d={ishovered ? pathSevenHover : pathSeven}/>

        <Mask d={ishovered ? pathOneHover : pathOne}/>
        <PurpleRope d={ishovered ? pathOneHover : pathOne}/>

        <Mask d={ishovered ? pathTwoHover : pathTwo}/>
        <PurpleRope d={ishovered ? pathTwoHover : pathTwo}/>

        <Mask d={ishovered ? pathFourHover : pathFour}/>
        <PurpleRope d={ishovered ? pathFourHover : pathFour}/>

        <Mask d={ishovered ? pathSixHover : pathSix}/>
        <PurpleRope d={ishovered ? pathSixHover : pathSix}/>

    </HoverBowline>
  );
};

export default BasicBowline;