import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { history } from './store';

import Home     from './containers/Home';
import NotFound from './components/error/NotFound';

export default class Router extends Component{
  render(){
    return(
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={NotFound} />
        </Switch>
      </ConnectedRouter>
    )
  }
}
