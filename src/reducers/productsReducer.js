const initialState = {};

export default function products(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCTS_SUCCESS":
      let stateOriginal = [0, 1];
      stateOriginal = Object.values(state);
      action.values.map((product) => {
        product.repeated = 1;        
        product.stock = 5;
        product.rating.count = 5;
        product.originalPrice = product.price;
        stateOriginal.map((b) => {
          if (action.product.id == product.id && b.stock != 5) {
            product.stock = b.stock;
          }
        });
      });
      return {
        ...state,
        ...action.values,
      };
    case "MODIFY_PRODUCTS":
      let products = [0, 1];
      products = Object.values(state);
      products.map((product) => {
        if (action.product.id == product.id) {
          product.stock = product.stock - action.count;
        }
      });
      return (state = products);

    default:
      return state;
  }
}
