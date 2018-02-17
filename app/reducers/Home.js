import { CURRENCIES_RECEIVED, LOAD_MORE, CURRENCIES_LOADED, CURRENCIES_UPDATED } from '../constants/Home';
import { Reducer } from './';

const initState = {
  currencies: [],
  currentPage: 1,
  maxPage: 0,
  loading: false,
  dataReceived: false
}

const reducerWithActions = Reducer([
  CURRENCIES_RECEIVED,
  LOAD_MORE,
  CURRENCIES_LOADED,
  CURRENCIES_UPDATED
]);

export default (state = initState, action)=> reducerWithActions(state, action);
