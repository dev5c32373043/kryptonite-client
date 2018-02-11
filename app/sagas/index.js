import { fork } from 'redux-saga/effects';

import homeSaga from './Home';

export default function* rootSaga(){
  yield fork(homeSaga)
}
