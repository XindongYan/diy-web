import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Machine from './routes/Machine';
import Diy from './routes/Diy';
import Game from './routes/Game';
import My from './routes/My';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/me" exact component={My} />
        <Route path="/game" exact component={Game} />
        <Route path="/diy" exact component={Diy} />
        <Route path="/machine" exact component={Machine} />
        <Route path="/index" exact component={IndexPage} />
        <Route path="/" exact component={IndexPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
