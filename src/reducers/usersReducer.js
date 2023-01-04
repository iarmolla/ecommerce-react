const initialState = {};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_USER_SUCCESS":
      return {
        ...state,
        ...action.users,
      };
    case "LOGIN_USER":
      let users = [0, 1]
      users = Object.values(state)
      users.map((user) => {
        if (user.id == action.values.id) {
          user.logged = action.values.logged;
        }
      });
      return users
    default:
      return state;
  }
}
