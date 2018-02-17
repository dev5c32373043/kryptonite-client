import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import homeReducer from './Home';
import converterReducer from './Converter';

export function Reducer(actions){
  return (state, action)=>{
    if(actions.includes(action.type)){
      const { type, ...props } = action;
      return Object.assign({}, state, props)
    }else{
      return state;
    }
  }
}

export default combineReducers({
  routing: routerReducer,
  homeState: homeReducer,
  converterState: converterReducer
})
