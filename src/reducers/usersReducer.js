import actionTypes from '../actionTypes'

const initialState = {}

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_USER:
      return state, action
    default:
      return state
  }
}
