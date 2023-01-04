const initialState = [];

export default function products(state = initialState, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      let validation = false;
      state.map((product) => {
        if (product.id == action.product.id) {
          product.repeated = product.repeated + 1;
          
          product.price += product.originalPrice;
          validation = true;         
          if (action.count > 1) {
            if (action.count == 2) {
              product.repeated = product.repeated + action.count -1;
            } else {
              product.repeated = product.repeated + action.count - 1;
            }
            action.count = 0;
          }
        }
      });
      if (!validation) {
        state.push(action.product);
      }
    case "DELETE_PRODUCT":
      return state.filter((element) => {
        return element.id != action.id;
      });
    default:
      return state;
  }
}
