const initialState = [];

export default function products(state = initialState, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      state.map((product) => {
        if(product.id == action.product.id) {
          product.repeated = 1 
        }
      });
      state.push(action.product);
    default:
      return state;
  }
}
