import { all, fork } from 'redux-saga/effects';
import products from './productsSagas';

function* rootSaga () {
  yield all([
    fork(products),
  ]);
}

export default rootSaga
