import { call, put, select, takeEvery } from 'redux-saga/effects';

import { CONVERT } from '../constants/Converter';
import converterActions from '../actions/Converter';

function* convert(action){
  const keys = yield select((store)=> store.converterState.keys),
  from = keys.filter((item)=> item.symbol == action.from)[0],
  to = keys.filter((item)=> item.symbol == action.to)[0],
  result = (from.price_usd * Number(action.amount) / to.price_usd).toFixed(2);
  yield put(converterActions.converted(result));
}

export default function* converterSaga(){
  yield takeEvery(CONVERT, convert)
}
