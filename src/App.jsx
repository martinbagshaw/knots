import React, { Suspense }  from 'react';
// import { I18nextProvider } from 'react-i18next'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import i18next from './i18n/i18n';
import './i18n/i18n';
import styled, { css } from 'styled-components';

import SuspenseLoader from './components/SuspenseLoader';
import routes from './routes';
import Nav from './components/Nav';
import Home from './components/Home';
import KnotView from './components/KnotView';

import { lightenFunc } from './style/styleFunctions';
import { breakpoint, colors, fontFamily } from './style/styleVariables';
import './style/reset.css';

const AppContainer = styled.div`
  background-color: ${props => props.theme};
  @import url('https://fonts.googleapis.com/css?family=Asap:400,600');
  font-family: ${fontFamily.main};
  font-size: 1.25rem;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media (min-width: ${breakpoint.laptop}px) {
    max-height: 100vh;
  }
`;

const Main = styled.main`
  padding-top: 5rem;
  min-height: 640px;
  max-height: 100vh;
`;

const lightIndex = {
  figure8: 0.26,
  bowline: 0.23,
  clovehitch: 0.4,
  italianhitch: 0.26
};

const App = () => {
  return (
    // <I18nextProvider i18n={i18next}>
      <Suspense fallback={<SuspenseLoader />}>
        <Router>
          <Switch>
            {routes.map(route => {

              const { slug, path, exact, color } = route;
              const View = slug === 'menu' ? Home : KnotView;
              const themeColor = slug === 'menu' ? colors.lightBlue :  css`${lightenFunc(lightIndex[slug], color)}`;

              const renderRoute = route => {
                return (
                  <AppContainer theme={themeColor}>
                    <Nav {...route} />
                    <Main>
                      <View {...route} />
                    </Main>
                  </AppContainer>
                );
              };

              const hasSteps = route.stepCount;
              if (hasSteps) {
                const steps = Array.from({ length: route.stepCount }, (_, index) => index + 1);
                return steps.map(step => 
                  <Route
                    key={`${path}/${step}`}
                    path={`${path}/${step}`}
                    exact={exact}
                    component={() => renderRoute(route)} />
                ).concat(
                  <Route key={path} path={path} exact={exact} component={() => renderRoute(route)} />
                );
              }

              return (
                <Route key={path} path={path} exact={exact} component={() => renderRoute(route)} />
              );

            })}
          </Switch>
        </Router>
      </Suspense>
    // </I18nextProvider>
  );
}

export default App;