import { put, call, takeEvery } from 'redux-saga/effects';

import { GET_CURRENCIES } from '../constants/Home';
import homeActions from '../actions/Home';
import * as homeApi     from '../api/Home';

function* getCurrencies(){
  try{
    const resp = yield call(homeApi.getCurrencies);
    yield put(homeActions.currenciesReceived({
      currencies: resp.data.currencies,
      dataReceived: true
    }))
  }catch(e){
    M.toast({
      html: 'Something went wrong please try again later',
      displayLength: 5000
    })
  }
}

export default function* homeSaga(){
  yield takeEvery(GET_CURRENCIES, getCurrencies)
}
