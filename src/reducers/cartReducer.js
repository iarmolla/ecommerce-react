const initialState = [];

export default function products(state = initialState, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      let validation = false;
      state.map((product) => {        
        if (product.id == action.product.id) {
          product.repeated = product.repeated + 1;
          product.price = product.originalPrice * product.repeated;
          validation = true;
          if (action.count >= 2) {
            product.repeated = product.repeated + action.count - 1;
            product.price = product.originalPrice * product.repeated;
          }
        }
      });
      if (!validation) {
        action.product.repeated = action.product.repeated + action.count - 1;
        action.product.price =
          action.product.originalPrice * action.product.repeated;
        state.push(action.product);
      }
      return state;
    case "DELETE_PRODUCT":
      return state.filter((element) => {       
          return element.id != action.id;        
      });        
    case "MODIFY_PRODUCT":      
      state.map((product) => {
        if (action.product.id == product.id) {
          product.repeated = action.product.modify;
          product.price = product.originalPrice * action.product.modify;
        }
      });
      return state;
    case "PURCHASED_PRODUCTS":
      return (state = []);

    default:
      return state;
  }
}
