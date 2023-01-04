const initialState = [];

export default function products(state = initialState, action) {
  switch (action.type) {
    case "GET_MEN_SUCCESS":
      action.values.map((product) => {
        product.repeated = 1;
        product.price *= 350;
        product.originalPrice = product.price;
      });
      return {
        ...state,
        ...action.values,
      };
    case "ORDER_MEN_PRICE_ASCENDING":
      let productsAscending = [0, 1];
      productsAscending = Object.values(state);
      productsAscending.sort((a, b) => a.price - b.price);
      return (state = productsAscending);
    case "ORDER_MEN_PRICE_DESCENDING":
      let productsDescending = [0, 1];
      productsDescending = Object.values(state);
      productsDescending.sort((a, b) => b.price - a.price);
      return (state = productsDescending);
    case "ORDER_MEN_NAME":
      let productsName = [0, 1];
      productsName = Object.values(state);
      productsName.sort(SortArray);
      return (state = productsName);
      function SortArray(x, y) {
        return x.title.localeCompare(y.title);
      }
    default:
      return state;
  }
}
