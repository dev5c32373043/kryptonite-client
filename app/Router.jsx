import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { history } from './store';

import RouteWithLayout from './RouteWithLayout';
import Home      from './containers/Home';
import Converter from './containers/Converter';
import NotFound  from './components/error/NotFound';

const Router = props => (
  <ConnectedRouter history={history}>
    <Switch>
      <RouteWithLayout exact path='/'     component={Home} />
      <RouteWithLayout exact path='/converter'  component={Converter} />
      <Route component={NotFound} />
    </Switch>
  </ConnectedRouter>
)

export default Router;
