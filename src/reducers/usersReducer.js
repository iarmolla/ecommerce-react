const initialState = [
  { id: 11, email: "random@gmail.com", password: "eksfj24" },
];

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_USER_SUCCESS":
      let getUsers = [...state, ...action.users];
      let newState;
      const userState = state.at(-1);
      const userAction = action.users.at(-1);
      if (userState.email != userAction.email) {
        return (newState = getUsers);
      }
      return state;
    case "LOGIN_USER":
      let users = [0, 1];
      users = Object.values(state);
      users.map((user) => {
        if (user.id == action.values.id) {
          user.logged = action.values.logged;
        }
      });
      return users;
    case "CREATE_USER":
      let usersAux = [...state];
      const id = usersAux.at(-1);
      let newUser = {};
      if (id.id == 10) {
        newUser = {
          id: usersAux[0].id + 2,
          email: action.user.email,
          password: action.user.password,
        };
        let results = usersAux.filter(function (nickname) {
          return nickname.email == action.user.email;
        });
        if (results.length > 0) {
          return state;
        } else {
          usersAux.push(newUser);
        }
      }
      if (id.id >= 11) {
        newUser = {
          id: id.id + 1,
          email: action.user.email,
          password: action.user.password,
        };
        let results = usersAux.filter(function (nickname) {
          return nickname.email == action.user.email;
        });
        if (results.length > 0) {
          return state;
        } else {
          usersAux.push(newUser);
        }
      }
      return (state = usersAux);
    default:
      return state;
  }
}
