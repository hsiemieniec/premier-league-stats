import React from 'react';
import Header from './components/layout/Header';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import BestScorers from './components/BestScorers';
import Fixtures from './components/Fixtures';
import Standings from './components/Standings';
import TeamsInfo from './components/TeamsInfo';
import EplWinners from './components/EplWinners';

import Container from 'react-bootstrap/Container';

function App() {
  return (
    <MemoryRouter>
        <Container fluid>
          <Header/>
          <main>
            <Switch>
              <Route path="/best-scorers">
                <BestScorers />
              </Route>
              <Route path="/fixtures">
                <Fixtures />
              </Route>
              <Route path="/teams-info">
                <TeamsInfo />
              </Route>
              <Route path="/epl-winners">
                <EplWinners />
              </Route>
              <Route path="/">
                <Standings />
              </Route>
            </Switch>
          </main>
        </Container>
    </MemoryRouter>
  );
}

export default App;
