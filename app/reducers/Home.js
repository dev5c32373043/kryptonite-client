import { CURRENCIES_RECEIVED, LOAD_MORE, CURRENCIES_LOADED } from '../constants/Home';
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
  CURRENCIES_LOADED
]);

export default (state = initState, action)=> reducerWithActions(state, action);
