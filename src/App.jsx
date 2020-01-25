import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import routes from './routes';
import Nav from './components/Nav';
import { colors, fontFamily} from './style/styleVariables';
import './style/reset.css';

// figma 
// https://www.figma.com/proto/GPZh3JwWvqXSRKI0Lc4kqSa9/Knots---mobile?scaling=contain&node-id=1%3A3

// TODO:
// 1. setup with routing
// 2. remove unused stuff
// 3. port to typescript
// 4. internationalisation (i18n)
// 5. transitions (slide in/out)

const AppContainer = styled.div`
  max-height: 100vh;
  background-color: ${colors.lightBlue};
  @import url('https://fonts.googleapis.com/css?family=Asap:400,600');
  font-family: ${fontFamily.main};
  font-size: 1.25rem;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const Main = styled.main`
  padding-top: 5rem;
  min-height: 640px;
  max-height: 100vh;
`;

const App = () => {

  return (
    <AppContainer>
      <Router>
        <Switch>
          {routes.map(route => {
            const View = route.component;
            // const hasSteps = route.stepCount;
            // if (hasSteps) {
            //   new Array(route.stepCount).map((v, i) => <Route key={`${route.path}/${i}`}} path={route.path} />)
            // }
            return (
              <Route key={route.path} path={route.path} exact={route.exact}>
                <Nav {...route} />
                <Main>
                  <View {...route} />
                </Main>
              </Route>
            );
          })}
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;