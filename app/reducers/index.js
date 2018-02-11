import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux'

import homeReducer from './Home';

export default combineReducers({
  form: formReducer,
  routing: routerReducer,
  homeState: homeReducer
})
