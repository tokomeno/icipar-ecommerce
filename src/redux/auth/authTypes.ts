import { SetCurrentUserAction } from "./authActions";

// TODO: ADD User Type When ip will be rady
export interface IUser {
  [key: string]: any;
}

export interface AuthState {
  user: IUser | null;
  isAuth: boolean;
  token: string | null;
  loading: false;
}

export enum AuthActionTypes {
  setCurrentUser = "setCurrentUser",
  //   loginUser = "loginUser",
  logoutUser = "logoutUser",
  authStartLoading = "authStartLoading",
  authStopLoading = "authStopLoading"
}

// // TODO:
// export interface LoginUserAction {
//   type: AuthActionTypes.loginUser;
//   payload: any;
// }

export type AuthActions = SetCurrentUserAction;
