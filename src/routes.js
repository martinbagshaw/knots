
// TODO
// - add metadata (e.g. metadata: getMetadata('home'))
// - add terms pages, hidden from menu
// - add content here
import MenuView from './components/MenuView';
import KnotView from './components/KnotView';

// SimpleSvg and detailedSvg
import Figure8 from './knots/Figure8';
// import Fig8Detailed from './knots/Fig8Detailed';

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
    SimpleSvg: Figure8,
    DetailedSvg: Figure8,
    knotWidth: 500, // 220 for detailed
    stepCount: 7,
    name: 'Figure 8',
    colour: blue,
    content: figEight,
  },
  {
    exact: true,
    path: '/bowline',
    component: KnotView,
    name: 'Bowline',
    colour: purple,
    content: bowline,
  },
  {
    exact: true,
    path: '/clove-hitch',
    component: KnotView,
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