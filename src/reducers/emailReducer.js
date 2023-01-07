const initialState = [];

export default function products(state = initialState, action) {
  switch (action.type) {   
    case "VALIDATE_EMAIL":
      return state.filter((element) => {
        return element.id != action.id;
      });
    default:
      return state;
  }
}
