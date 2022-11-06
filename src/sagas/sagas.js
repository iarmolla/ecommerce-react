import { put, takeLatest } from 'redux-saga/effects'
import actions from '../actions/users'
import getUser from '../syncs/users'

function* helloSaga(id) {
  try {
    const response = yield getUser(1)
    yield put(actions.getUserFetch(response.data))
  } catch (error) {
    
  }
}

export default helloSaga