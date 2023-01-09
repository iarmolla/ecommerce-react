import { put, takeLatest } from "redux-saga/effects";
import actions from "../actions/email";
import emailSync  from "../syncs/email";

function* emailValidate(action) {
  try {
    const response = yield emailSync.validateEmail(action.email)
    yield put(actions.emailSuccess(response.data));
  } catch (error) {}
}

function* email() {
    yield takeLatest("VALIDATE_EMAIL", emailValidate)
}

export default email;
