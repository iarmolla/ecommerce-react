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

export default {
  getProductsFetch,
  getUserFetch
}