function email(email) {
  return {
    type: "VALIDATE_EMAIL",
    email,
  };
}

function emailSuccess(email) {
  return {
    type: "VALIDATE_EMAIL_SUCCESS",
    email,
  };
}
export default {email,emailSuccess};
