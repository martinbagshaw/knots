
// figma 
// https://www.figma.com/proto/GPZh3JwWvqXSRKI0Lc4kqSa9/Knots---mobile?scaling=contain&node-id=1%3A3

// TODO
// - add metadata (e.g. metadata: getMetadata('home'))
// - terms pages, hidden from menu
// - routes for steps
// - have svg components defined at menu / knot view levels, based on slug
// - port to typescript
// - transitions (slide in/out)

// - - - - - - - -

// - best to define step behaviour here, or in svgs?

//   - if we have routes for each step, need to know some information here
//   - routes to be dynamic (e.g. with /:uid in to=""), but with step prop passed in and SAME component
//   - different behaviour for direct links?

// - KnotView.jsx also defines behaviour:
//   - button clicks will run animations (transforms, morphs, stroke dashoffsets)
//   - next / prev links will be router links, not buttons


// detailed (knot)
// new version, in progress:
// import Fig8Detailed from './knots/Fig8Detailed';


import Figure8 from './knots/Figure8';

// basic (menu)
import BasicFig8 from './knots/figure8/BasicFig8';
import BasicBowline from './knots/bowline/BasicBowline';
import BasicClove from './knots/clove/BasicClove';
import BasicItalian from './knots/italian/BasicItalian';

import { colors } from './style/styleVariables';
const { grey, blue, purple, oliveGreen, orange } = colors;

export default [
  {
    exact: true,
    path: '/',
    slug: 'menu',
    color: grey,
  },
  {
    exact: true,
    path: '/figure-8',
    slug: 'figure8',
    SimpleSvg: BasicFig8,
    DetailedSvg: Figure8,
    knotWidth: 220,
    stepCount: 7,
    color: blue,
  },
  {
    exact: true,
    path: '/bowline',
    slug: 'bowline',
    SimpleSvg: BasicBowline,
    stepCount: 8,
    color: purple,
  },
  {
    exact: true,
    path: '/clove-hitch',
    slug: 'clovehitch',
    SimpleSvg: BasicClove,
    color: oliveGreen,
  },
  {
    exact: true,
    path: '/italian-hitch',
    slug: 'italianhitch',
    SimpleSvg: BasicItalian,
    color: orange,
  },
];