import { all, fork } from 'redux-saga/effects';
import products from './productsSagas';
import users from './usersSagas';
import email from './emailSagas'


function* rootSaga () {
  yield all([
    fork(products),
    fork(users),
    fork(email)
  ]);
}

export default rootSaga
