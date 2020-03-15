import {
  AuthState as IAuthState,
  AuthActions,
  AuthActionTypes
} from "./authTypes";

let initState: IAuthState = {
  isAuth: false,
  token: null,
  user: null,
  loading: false,
  errors: null
};

export const authReducer = (
  state = initState,
  action: AuthActions
): IAuthState => {
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
    case AuthActionTypes.updateAvatar: {
      return {
        ...state,
        user: {
          ...state.user,
          avatar: action.payload
        }
      };
    }
    default:
      return state;
  }
};
