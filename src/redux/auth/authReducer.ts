import {
  AuthState as IAuthState,
  AuthActions,
  AuthActionTypes,
  IUser,
} from "./authTypes";

let initState: IAuthState = {
  isAuth: false,
  token: null,
  user: null,
  loading: false,
  errors: null,
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
        isAuth: true,
      };
    case AuthActionTypes.setUpdatedUserData:
      return {
        ...state,
        user: action.payload,
      };
    case AuthActionTypes.setAuthErrors:
      return {
        ...state,
        errors: action.payload,
      };
    case AuthActionTypes.logoutUser:
      return {
        ...state,
        isAuth: false,
        token: null,
        user: null,
        loading: false,
        errors: null,
      };
    case AuthActionTypes.updateAvatar: {
      return {
        ...state,
        user: {
          ...state.user,
          avatar: action.payload,
        } as IUser,
      };
    }
    case AuthActionTypes.setSubscribed: {
      return {
        ...state,
        user: {
          ...state.user,
          is_subscribed: true,
        } as IUser,
      };
    }
    default:
      return state;
  }
};
