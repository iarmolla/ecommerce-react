import { put, takeLatest } from 'redux-saga/effects'
import actions from '../actions/users'
import getUser from '../syncs/users'

function* getUsers(id) {
  try {
    const response = yield getUser(1)
    yield put(actions.getUserFetchSuccess(response.data))
  } catch (error) {
    
  }
}

export default getUsers