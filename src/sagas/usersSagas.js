import { put, takeLatest } from "redux-saga/effects";
import actions from "../actions/users";
import usersSync  from "../syncs/users";

function* getUsers() {
  try {
    const response = yield usersSync.getUsers()
    yield put(actions.getUsersSuccess(response.data));
  } catch (error) {}
}

function* products() {
    yield takeLatest("GET_USERS", getUsers)
}

export default products;
