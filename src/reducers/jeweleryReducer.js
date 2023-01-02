// import actionTypes from '../actionTypes'

const initialState = {}

export default function products(state = initialState, action) {
  switch (action.type) {
    case 'GET_JEWELERY_SUCCESS':
      return {
        ...state,
        ...action.values
      }
    
    default:
      return state
  }
}
