import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

/** Routes */
import Main from './pages/Main';
import Repository from './pages/Repository';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/repository/:repository" component={Repository} />
      </Switch>
    </Router>
  );
}
