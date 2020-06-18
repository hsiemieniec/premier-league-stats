import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BestScorers from '../views/BestScorers';
import Fixtures from '../views/Fixtures';
import Standings from '../views/Standings';
import TeamsInfo from '../views/TeamsInfo';
import TeamDetails from '../views/TeamDetails';
import EplWinners from '../views/EplWinners';

export default function Router() {
    return (
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
            <Route path="/team-details/:clubId">
                <TeamDetails />
            </Route>
            <Route path="/">
                <Standings />
            </Route>
        </Switch>
    )
}
