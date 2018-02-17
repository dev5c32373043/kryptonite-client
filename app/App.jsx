import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Router from './Router';
import store from './store';

import socketActions from './actions/socket';

import 'materialize-css/dist/js/materialize.min.js';

class App extends Component{
  componentWillMount(){
    const { dispatch } = store;
    dispatch(socketActions.initSocketConnect())
  }
  render(){
    return <Router />
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
