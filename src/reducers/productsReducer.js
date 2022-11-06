import actionTypes from '../actionTypes'

const initialState = {}

export default function products(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS:
      return {
        ...state,
        ...action
      }
    default:
      return state
  }
}
