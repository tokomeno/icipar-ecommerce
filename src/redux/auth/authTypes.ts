// TODO: ADD User Type When ip will be rady
export interface IUser {
  [key: string]: any;
  avatar: string | null;
  id: number;
  phone: number | null;
  email: number | null;
  is_subscribed: boolean;
  has_filled_profile: boolean;
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
    "g-recaptcha-response"?: string[];
    msg: string;
  } | null;
}

export enum AuthActionTypes {
  setCurrentUser = "setCurrentUser",
  setUpdatedUserData = "setUpdatedUserData",
  logoutUser = "logoutUser",
  setAuthErrors = "setAuthErrors",
  updateAvatar = "updateAvatar",
  setSubscribed = "setSubscribed",
}

export interface SetAuthErrorAction {
  type: AuthActionTypes.setAuthErrors;
  payload: AuthState["errors"];
}

export interface SetCurrentUserAction {
  type: AuthActionTypes.setCurrentUser;
  payload: {
    user: IUser;
    token: string;
  };
}
export interface SetUpdatedUserDataAction {
  type: AuthActionTypes.setUpdatedUserData;
  payload: IUser;
}

export interface UpdateAvatarAction {
  type: AuthActionTypes.updateAvatar;
  payload: string;
}

export interface LogoutUserAction {
  type: AuthActionTypes.logoutUser;
}

export interface UserHasSubscribedToNews {
  type: AuthActionTypes.setSubscribed;
}

export type AuthActions =
  | SetCurrentUserAction
  | SetAuthErrorAction
  | LogoutUserAction
  | UpdateAvatarAction
  | UserHasSubscribedToNews
  | SetUpdatedUserDataAction;
