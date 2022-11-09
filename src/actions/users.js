import actionTypes from '../actionTypes'

function getProductsFetch(values) {
  return {
    type: actionTypes.GET_PRODUCTS,
    values,
  }
}

function getUserFetch(values) {
  return {
    type: actionTypes.GET_USER,
    values,
  }
}
function getUserFetchSuccess(values) {
  return {
    type: actionTypes.GET_USER_SUCCESS,
    values,
  }
}

export default {
  getProductsFetch,
  getUserFetch,
  getUserFetchSuccess
}