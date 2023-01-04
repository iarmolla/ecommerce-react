const initialState = {}

export default function products(state = initialState, action) {
  switch (action.type) {
    case 'GET_WOMEN_SUCCESS':
      action.values.map((product) => {
        product.price *= 350
        product.repeated = 1
        product.originalPrice = product.price
      })

      return {
        ...state,
        ...action.values
      }
    
    default:
      return state
  }
}
