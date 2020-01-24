import { AuthState, AuthActions, AuthActionTypes } from "./authTypes";

const initState: AuthState = {
  isAuth: false,
  token: null,
  user: null,
  loading: false,
  errors: null
};

export const authReducer = (state = initState, action: AuthActions) => {
  switch (action.type) {
    case AuthActionTypes.setCurrentUser:
      const { user, token } = action.payload;
      return {
        ...state,
        user,
        token,
        isAuth: true
      };
    default:
      return state;
  }
};
