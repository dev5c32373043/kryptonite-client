import { fork } from 'redux-saga/effects';

import converterSaga from './Converter';

export default function* rootSaga(){
  yield fork(converterSaga)
}
