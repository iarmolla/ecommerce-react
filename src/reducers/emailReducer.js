const initialState = [];
export default function products(state = initialState, action) {
  switch (action.type) {   
    case "VALIDATE_EMAIL_SUCCESS":

      return {
        ...state,
        ...action.email
      }
    default:
      return state;
  }
}
