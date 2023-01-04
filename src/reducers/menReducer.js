const initialState = {}

export default function products(state = initialState, action) {
  switch (action.type) {
    case 'GET_MEN_SUCCESS':
      action.values.map((product) => {
        product.repeated = 1
        product.price *= 350;
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
