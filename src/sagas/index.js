import { all, fork } from 'redux-saga/effects';
import products from './productsSagas';
import users from './usersSagas';


function* rootSaga () {
  yield all([
    fork(products),
    fork(users)
  ]);
}

export default rootSaga
