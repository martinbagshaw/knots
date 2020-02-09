
// TODO
// - add metadata (e.g. metadata: getMetadata('home'))
// - add terms pages, hidden from menu
// - add content here
import MenuView from './components/MenuView';
import KnotView from './components/KnotView';

// SimpleSvg and detailedSvg
// import Figure8 from './knots/Figure8';
import Fig8Detailed from './knots/Fig8Detailed';
import BasicFig8 from './knots/figure8/BasicFig8';
import BasicBowline from './knots/bowline/BasicBowline';
import BasicClove from './knots/clove/BasicClove';

import { colors } from './style/styleVariables';
import content from './content';
const { grey, blue, purple, oliveGreen, orange } = colors;
const { figEight, bowline, clove, italian } = content;


export default [
  {
    exact: true,
    path: '/',
    component: MenuView,
    name: 'Browse Knots',
    colour: grey,
  },
  {
    exact: true,
    path: '/figure-8',
    component: KnotView,
    SimpleSvg: BasicFig8,
    DetailedSvg: Fig8Detailed,
    // 500 previously. Should be reponsive though we need to have this specific to the knot
    knotWidth: 220,
    stepCount: 7,
    name: 'Figure 8',
    colour: blue,
    content: figEight,
  },
  {
    exact: true,
    path: '/bowline',
    component: KnotView,
    SimpleSvg: BasicBowline,
    name: 'Bowline',
    colour: purple,
    content: bowline,
  },
  {
    exact: true,
    path: '/clove-hitch',
    component: KnotView,
    SimpleSvg: BasicClove,
    name: 'Clove Hitch',
    colour: oliveGreen,
    content: clove,
  },
  {
    exact: true,
    path: '/italian-hitch',
    component: KnotView,
    name: 'Italian Hitch',
    colour: orange,
    content: italian,
  },
];