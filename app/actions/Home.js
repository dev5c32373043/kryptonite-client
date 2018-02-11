import { GET_CURRENCIES, CURRENCIES_RECEIVED } from '../constants/Home';

export default {
  getCurrencies: ()=>({
    type: GET_CURRENCIES
  }),
  currenciesReceived: (payload)=>({
    type: CURRENCIES_RECEIVED,
    currencies: payload.currencies,
    dataReceived: payload.dataReceived
  })
}
