// TODO: ADD User Type When ip will be rady
export interface IUser {
  [key: string]: any;
  is_subscribed?: boolean;
  avatar: string;
  id: number;
  phone: number | null;
  email: number | null;
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
  logoutUser = "logoutUser",
  setAuthErrors = "setAuthErrors",
  updateAvatar = "updateAvatar"
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

export interface UpdateAvatarAction {
  type: AuthActionTypes.updateAvatar;
  payload: string;
}

export interface LogoutUserAction {
  type: AuthActionTypes.logoutUser;
}

export type AuthActions =
  | SetCurrentUserAction
  | SetAuthErrorAction
  | LogoutUserAction
  | UpdateAvatarAction;
