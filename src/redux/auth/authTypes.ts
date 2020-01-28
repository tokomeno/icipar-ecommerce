import {
  SetCurrentUserAction,
  SetAuthErrorAction,
  LogoutUserAction
} from "./authActions";

// TODO: ADD User Type When ip will be rady
export interface IUser {
  [key: string]: any;
}

export interface AuthState {
  user: IUser | null;
  isAuth: boolean;
  token: string | null;
  loading: boolean;
  errors: {
    email?: string[];
    phone?: string[];
    password?: string[];
    password_confirmation?: string[];
    msg: string;
  } | null;
}

export enum AuthActionTypes {
  setCurrentUser = "setCurrentUser",
  logoutUser = "logoutUser",
  setAuthErrors = "setAuthErrors"
}

// // TODO:
// export interface LoginUserAction {
//   type: AuthActionTypes.loginUser;
//   payload: any;
// }

export type AuthActions =
  | SetCurrentUserAction
  | SetAuthErrorAction
  | LogoutUserAction;
