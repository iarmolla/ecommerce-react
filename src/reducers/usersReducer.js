import actionTypes from '../actionTypes'

const initialState = {}
const saveUser = (state,action) => {
  return {...state,values:action.values}
}

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_USER_SUCCESS:
      return saveUser(state, action)
    default:
      return state
  }
}
