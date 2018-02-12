import { CURRENCIES_RECEIVED, LOAD_MORE, CURRENCIES_LOADED } from '../constants/Home';

const initState = {
  currencies: [],
  currentPage: 1,
  maxPage: 0,
  loading: false,
  dataReceived: false
}

export default (state = initState, action)=>{
  switch (action.type) {
    case CURRENCIES_RECEIVED:
      return Object.assign({}, state, {
        currencies: action.currencies,
        maxPage: action.maxPage,
        dataReceived: action.dataReceived
      })
      break;
    case LOAD_MORE:
      return Object.assign({}, state, {
        loading: action.loading
      })
      break;
    case CURRENCIES_LOADED:
      return Object.assign({}, state, {
        currencies: action.currencies,
        currentPage: action.currentPage,
        loading: action.loading
      })
      break;
    default:
      return state;
  }
}
