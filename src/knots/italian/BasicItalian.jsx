import React from 'react';
import styled, { css } from 'styled-components';
import { Mask, Rope, Carabiner } from '../common/knotStyles';
import { colors } from '../../style/styleVariables';
import { darkenFunc } from '../../style/styleFunctions';

const pathOne = "M 472.504 1009 C 472.504 1009 472.504 518.5 472.504 457.5 C 472.504 396.5 447.504 345 413.004 345";
const pathOneHover = "M 497.504 1009 C 497.504 1009 497.504 508.5 497.504 457.5 C 497.504 406.5 482.5 387 451.004 387";

const pathTwo = "M 413.01 345 C 362.5 345 296.51 431 296.51 557.5 C 296.51 684 281.008 922.5 412.01 922.5";
const pathTwoHover = "M 451.009 387 C 416.509 387 387 435 387 513.5 C 387 592 406 663 460.009 663";

const pathThree = "M 411.579 922.5 C 506.5 922.5 565 789.5 565 594";
const pathThreeHover = "M 459.579 663 C 503.5 663 547.5 634 547.5 593";

const pathFour = "M 606.5 364.5 C 579 364.5 565 398.5 565 457.5 C 565 481.986 565 477.308 565 594";
const pathFourHover = "M 589.5 377.5 C 562 377.5 548 398.5 548 457.5 C 548 481.986 547.5 568.514 547.5 593";

const pathFive = "M 660 511 C 660 396.5 634.5 364 607 364";
const pathFiveHover = "M 633.5 469.5 C 633.5 393 617 377.5 589.5 377.5";

const pathSix = "M 660 511 C 660 558.2 660 844.833 660 1009";
const pathSixHover = "M 633.5 469.5 C 633.5 469.5 633.5 844.833 633.5 1009";

const carabinerPath = "M685.002 10.5H673.695L675.077 21.7221C679.014 53.6918 683.203 87.0829 687.486 121.224C695.183 182.584 703.185 246.367 710.572 308.677C716.104 355.342 707.507 390.874 676.556 416.127C644.611 442.19 586.977 459.019 489.696 462.005C297.551 467.902 208.484 381.164 182.818 315.366C169.088 280.166 160.741 257.865 155.836 244.392C154.253 240.043 153.03 236.617 152.1 233.976C164.912 225.291 175.253 211.847 177.875 195.593C179.119 187.878 182.239 169.162 185.053 152.337C186.459 143.933 187.787 136.013 188.763 130.194C188.85 129.676 188.934 129.176 189.015 128.693C207.85 127.289 220.146 121.249 228.001 114.186C232.407 110.225 235.157 106.167 236.834 102.945C237.67 101.338 238.238 99.9416 238.616 98.8674C238.805 98.3298 238.946 97.8709 239.05 97.5043C239.102 97.321 239.145 97.1604 239.18 97.0243C239.197 96.9562 239.212 96.8943 239.225 96.8386L239.244 96.7598L239.252 96.7239L239.256 96.7069C239.258 96.6987 239.26 96.6905 229.502 94.5L239.26 96.6905L239.298 96.5193L239.33 96.3469L253.33 21.8469L255.557 10H243.502H53.5025H45.1763L43.6679 18.1884C43.2274 20.58 42.7119 23.5217 42.0252 27.4404C40.9489 33.5826 39.452 42.1249 37.1637 54.7113C34.6044 68.7891 39.486 81.0107 47.7023 90.488C51.943 95.3795 57.1121 99.6139 62.7706 103.203C62.2119 103.255 61.646 103.314 61.0734 103.382C49.2591 104.785 34.0679 109.938 22.944 125.079C19.1814 130.201 15.8922 135.17 13.5986 140.734C11.2346 146.469 10.1016 152.393 10.004 159.36C9.92527 164.975 11.0365 171.807 13.0038 180.135C15 188.586 18.0393 199.217 22.1647 212.651C27.4906 229.995 34.7469 252.39 44.1271 281.341C49.265 297.199 55.0401 315.023 61.4842 335.062C80.214 393.302 114.774 455.35 181.528 502.718C248.222 550.043 346.043 582 490.002 582C634.369 582 723.408 540.928 774.661 485.475C825.804 430.14 837.981 361.91 831.423 310.241C825.171 260.989 815.921 188.238 808.234 127.801C804.39 97.5818 800.937 70.4411 798.445 50.855L795.499 27.7016L794.701 21.4236L794.493 19.7928L794.44 19.3775L794.427 19.2727L794.423 19.2464L794.423 19.2398C794.422 19.2383 794.422 19.2376 784.502 20.5L794.422 19.2376L793.31 10.5H784.502H685.002Z";

const GreenRope = styled(Rope)`
  stroke: ${props => props.ishovered ?
    css`${darkenFunc(0.2, colors.orange)}` : 
    colors.orange};
`;

const HoverItalian = styled.svg`
  pointer-events: none;
  path {
    transition: 0.5s ease;
  }
`;

const BasicItalian = ({ width = 500, ishovered }) => {

  return (
    <HoverItalian
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      x="0px" y="0px"
      style={{
        width,
      }}
      viewBox="0 0 844 1009"
      xmlSpace="preserve">

      <Mask d={ishovered ? pathThreeHover : pathThree} />
      <GreenRope
        d={ishovered ? pathThreeHover : pathThree}
        ishovered={ishovered}/>

      <Mask d={ishovered ? pathOneHover : pathOne} />
      <GreenRope
        d={ishovered ? pathOneHover : pathOne}
        ishovered={ishovered}/>

      <Mask d={ishovered ? pathFiveHover : pathFive} />
      <GreenRope
        d={ishovered ? pathFiveHover : pathFive}
        ishovered={ishovered}/>
        
      <Mask d={ishovered ? pathSixHover : pathSix} />
      <GreenRope
        d={ishovered ? pathSixHover : pathSix}
        ishovered={ishovered}/>

      <Carabiner d={carabinerPath} />

      <Mask d={ishovered ? pathFourHover : pathFour}/>
      <GreenRope
        d={ishovered ? pathFourHover : pathFour}
        ishovered={ishovered}/>

      <Mask d={ishovered ? pathTwoHover : pathTwo}/>
      <GreenRope
        d={ishovered ? pathTwoHover : pathTwo}
        ishovered={ishovered}/>

    </HoverItalian>
  );
};

export default BasicItalian;