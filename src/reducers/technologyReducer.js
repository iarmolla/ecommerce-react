const initialState = {}

export default function products(state = initialState, action) {
  switch (action.type) {
    case 'GET_TECHNOLOGY_SUCCESS':
      return {
        ...state,
        ...action.values
      }
    
    default:
      return state
  }
}
