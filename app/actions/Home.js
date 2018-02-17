import * as homeConstants from '../constants/Home';

export default {
  getCurrencies: ()=>({
    type: homeConstants.GET_CURRENCIES
  }),
  currenciesReceived: (payload)=>({
    type: homeConstants.CURRENCIES_RECEIVED,
    currencies: payload.currencies,
    maxPage: payload.maxPage,
    dataReceived: payload.dataReceived
  }),
  loadMore: (loading)=>({
    type: homeConstants.LOAD_MORE,
    loading: loading
  }),
  currenciesLoaded: (payload)=>({
    type: homeConstants.CURRENCIES_LOADED,
    currencies: payload.currencies,
    currentPage: payload.currentPage,
    loading: payload.loading
  }),
  currenciesUpdated: (currencies)=>({
    type: homeConstants.CURRENCIES_UPDATED,
    currencies
  })
}
