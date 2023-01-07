function validateEmail(email) {
  return {
    type: "VALIDATE_EMAIL",
    email,
  };
}
export default validateEmail;
