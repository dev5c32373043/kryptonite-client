import { KEYS_RECEIVED, CONVERT, RESULT_RECEIVED, RESET } from '../constants/Converter';
import { Reducer } from './';

const initState = {
  keys: [],
  result: '',
  dataReceived: false
}

const reducerWithActions = Reducer([
  KEYS_RECEIVED,
  CONVERT,
  RESULT_RECEIVED,
  RESET
]);

export default (state = initState, action)=> reducerWithActions(state, action);
