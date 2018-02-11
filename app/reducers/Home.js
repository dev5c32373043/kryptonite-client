import { CURRENCIES_RECEIVED } from '../constants/Home';

const initState = {
  currencies: [],
  dataReceived: false
}

export default (state = initState, action)=>{
  switch (action.type) {
    case CURRENCIES_RECEIVED:
      return Object.assign({}, state, {
        currencies: action.currencies,
        dataReceived: action.dataReceived
      })
      break;
    default:
      return state;
  }
}
