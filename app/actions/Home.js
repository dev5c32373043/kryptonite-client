import { GET_CURRENCIES, CURRENCIES_RECEIVED, LOAD_MORE, CURRENCIES_LOADED } from '../constants/Home';

export default {
  getCurrencies: ()=>({
    type: GET_CURRENCIES
  }),
  currenciesReceived: (payload)=>({
    type: CURRENCIES_RECEIVED,
    currencies: payload.currencies,
    maxPage: payload.maxPage,
    dataReceived: payload.dataReceived
  }),
  loadMore: (loading)=>({
    type: LOAD_MORE,
    loading: loading
  }),
  currenciesLoaded: (payload)=>({
    type: CURRENCIES_LOADED,
    currencies: payload.currencies,
    currentPage: payload.currentPage,
    loading: payload.loading
  })
}
