import axios from "axios";

async function validateEmail(email) {
  return axios.get(`https://emailvalidation.abstractapi.com/v1/?api_key=9f96a31c932642938d44d1067309fa2d&email=${email}`)
}

export default {
    validateEmail,
}
