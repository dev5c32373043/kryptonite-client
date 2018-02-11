import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Router from './Router';
import store from './store';

import 'materialize-css/dist/js/materialize.min.js';

class App extends Component{
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
