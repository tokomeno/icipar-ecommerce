import { AuthState, AuthActions, AuthActionTypes } from "./authTypes";

const authStateFromStorage = localStorage.getItem("auth");

let initState: AuthState;
if (authStateFromStorage) {
  initState = JSON.parse(authStateFromStorage);
} else {
  initState = {
    isAuth: false,
    token: null,
    user: null,
    loading: false,
    errors: null
  };
}

export const authReducer = (state = initState, action: AuthActions) => {
  switch (action.type) {
    case AuthActionTypes.setCurrentUser:
      const { user, token } = action.payload;
      return {
        ...state,
        errors: null,
        user,
        token,
        isAuth: true
      };
    case AuthActionTypes.setAuthErrors:
      return {
        ...state,
        errors: action.payload
      };
    case AuthActionTypes.logoutUser:
      return {
        ...state,
        isAuth: false,
        token: null,
        user: null,
        loading: false,
        errors: null
      };
    default:
      return state;
  }
};
