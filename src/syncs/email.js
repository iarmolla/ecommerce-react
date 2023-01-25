import axios from "axios";

async function validateEmail(email) {
  return axios.get(`https://emailvalidation.abstractapi.com/v1/?YOUR_API_KEY=${email}`)
}

export default {
    validateEmail,
}
