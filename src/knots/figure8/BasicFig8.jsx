// Simpler figure 8 in the menu

import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';
import { Mask, Rope } from '../common/knotStyles';
import { colors } from '../../style/styleVariables';
import { darkenFunc } from '../../style/styleFunctions';

const paths = {
  one: {
    plain: "M180.907 811.547C269.327 811.547 341.005 739.87 341.005 651.448C341.005 578.959 219.96 494.298 219.96 494.298C219.96 494.298 203.838 483.014 183.444 465.125",
    hover: "M201.617 604.763C250.326 604.763 283.006 576.044 283.006 543.364C283.006 505.237 252.307 495.334 232.501 481.47C214.671 468.989 206.07 463.731 195.5 452.33"
  },
  two: {
    plain: "M 270.033 0 C 270.033 89.84 270.033 179.681 270.033 269.521 C 270.033 313.667 252.165 353.638 223.268 382.601 C 197.319 408.563 171.369 434.524 145.42 460.486 C 119.471 486.447 93.522 512.409 67.572 538.37 C 38.673 567.33 20.806 607.302 20.806 651.448 C 20.806 739.869 92.486 811.547 180.907 811.547",
    hover: "M 245.189 0 C 245.189 0 245.189 276.683 245.189 315.202 C 245.189 353.72 236.957 373.527 213.685 395.808 C 190.413 418.09 166.645 434.43 151.296 451.266 C 135.946 468.101 120.596 484.441 120.596 523.558 C 120.596 545.592 126.941 565.894 140.241 580.686 C 153.541 595.479 173.797 604.763 201.617 604.763"
  },
  three: {
    plain: "M 301.502 523.01 C 325.581 498.92 349.661 474.829 373.74 450.739 C 402.637 421.776 420.505 381.805 420.505 337.659 C 420.505 249.238 348.826 177.56 260.405 177.56 C 171.983 177.56 100.306 249.238 100.306 337.659 C 100.306 365.76 118.073 395.453 139.897 421.326",
    hover: "M 249.581 457 C 260.598 441.761 267.276 435.298 280.035 424.362 C 293.899 412.478 306.442 398.284 308.753 372.866 C 311.065 347.448 297.86 315.594 242.155 305.443 C 186.451 295.293 143.042 323.683 143.042 364.285 C 143.042 380.106 147.551 392.384 156 404.877"
  },
  four: {
    plain: "M 171.533 987.751 C 171.531 898.289 171.529 808.826 171.527 719.364 C 171.527 675.217 189.395 635.245 218.292 606.282 C 224.777 599.794 231.263 593.305 237.748 586.817 C 244.233 580.329 250.719 573.84 257.204 567.352",
    hover: "M 193.222 987.75 C 193.222 987.75 193.22 884.813 193.219 779.928 C 193.218 675.044 193.216 568.214 193.216 560.428 C 193.216 542 199 531.5 209.063 519.431 C 211.968 515.842 214.873 511.988 217 509.105"
  }
};

const HoverFig8 = styled.svg`
  pointer-events: none;
  path {
    transition: 0.5s ease;
  }
`;

const BlueRope = styled(Rope)`
  stroke: ${props => props.ishovered ?
    css`${darkenFunc(0.2, colors.blue)}` : 
    colors.blue};
`;

const BasicFig8 = ({ width = 500, ishovered }) => {
  const pathKeys = Object.keys(paths);
  return (
    <HoverFig8
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

      {pathKeys.map(key => {
        const plainPath = paths[key].plain;
        const hoverPath = paths[key].hover;
        return (
          <Fragment key={key}>
            <Mask d={ishovered ? hoverPath : plainPath}/>
            <BlueRope
              d={ishovered ? hoverPath : plainPath}
              ishovered={ishovered}/>
          </Fragment>
        );
      })}

    </HoverFig8>
  );
};

export default BasicFig8;