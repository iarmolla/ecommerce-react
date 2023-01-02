const initialState = {}

export default function products(state = initialState, action) {
  switch (action.type) {
    case 'GET_PRODUCTS_SUCCESS':
      return {
        ...state,
        ...action.values
      }
    
    default:
      return state
  }
}
