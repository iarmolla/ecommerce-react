function loginUser(values) {
  return {
    type: 'LOGIN_USER',
    values,
  }
}
function loginUserSuccess(values) {
  return {
    type: 'LOGIN_USER_SUCCESS',
    values,
  }
}

function getUsers() {
  return {
    type:'GET_USERS',
  }
}

function getUsersSuccess(users) {
  return {
    type: 'GET_USER_SUCCESS',
    users
  }
}

function createUser(user) {
  return {
    type: 'CREATE_USER',
    user
  }
}

export default {
  loginUser,
  loginUserSuccess,
  getUsers,
  getUsersSuccess,
  createUser
}