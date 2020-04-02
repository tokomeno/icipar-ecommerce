import axios from "axios";
import {
  AuthActionTypes,
  IUser,
  AuthState,
  SetCurrentUserAction,
  SetAuthErrorAction,
  UpdateAvatarAction,
  LogoutUserAction
} from "./authTypes";
import { Dispatch } from "redux";
import { API_LOGIN_URL, API_REGISTER_URL } from "../../api/endpoints";
import {
  setAuthorizationToken,
  setGenericTokenAsHeader
} from "../../api/helpers";
import { store } from "../store";
import { fetchCart } from "../cart/cartActions";
import { fetchFavorites } from "../favorites/favoritesActions";

export const setCurrentUser = ({
  user,
  token
}: {
  user: IUser;
  token: string;
}): SetCurrentUserAction => {
  setAuthorizationToken(token);
  store.dispatch(fetchCart() as any);
  store.dispatch(fetchFavorites() as any);
  return {
    type: AuthActionTypes.setCurrentUser,
    payload: { user, token }
  };
};

interface LoginUserParams {
  userData: {
    username: string;
    password: string;
    recaptcha_token: string | null;
  };
  hideModal: () => void;
}
export const loginUser = ({
  userData,
  hideModal
}: LoginUserParams): Function => {
  return async (dispatch: Dispatch) => {
    if (!userData.recaptcha_token) {
      dispatch(
        setAuthErrors({
          "g-recaptcha-response": ["recaptcha is not valid"],
          msg: "recaptcha is not valid"
        })
      );
      return;
    }
    axios
      .post<IUser>(API_LOGIN_URL, {
        ...userData,
        "g-recaptcha-response": userData.recaptcha_token
      })
      .then(res => {
        const { user, token } = res.data;
        if (res.data.error) {
          dispatch(setAuthErrors({ msg: "credentials_not_match" }));
          return;
        }
        dispatch<SetCurrentUserAction>(setCurrentUser({ user, token }));
        hideModal();
      })
      .catch(err => {
        console.log(err);
        catchLoginRegisterError(err, dispatch);
      });
  };
};

interface RegisterUserParams {
  userData: {
    email: string;
    phone: string;
    password: string;
    password_confirmation: string;
    recaptcha_token: string;
  };
  callback: (user: IUser | null) => void;
}
export const registerUser = ({
  userData,
  callback
}: RegisterUserParams): Function => {
  return async (dispatch: Dispatch) => {
    axios
      .post<{ user: IUser; token: string }>(API_REGISTER_URL, {
        ...userData,
        "g-recaptcha-response": userData.recaptcha_token
      })
      .then(res => {
        const { user, token } = res.data;
        dispatch<SetCurrentUserAction>(setCurrentUser({ user, token }));
        callback(user);
      })
      .catch(err => {
        console.log(err);
        catchLoginRegisterError(err, dispatch);
      });
  };
};

export const updateAvatar = (avatar: string): UpdateAvatarAction => ({
  type: AuthActionTypes.updateAvatar,
  payload: avatar
});

export const setAuthErrors = (
  errors: AuthState["errors"]
): SetAuthErrorAction => ({
  payload: errors,
  type: AuthActionTypes.setAuthErrors
});

export const logoutUser = (): LogoutUserAction => {
  setGenericTokenAsHeader();
  return {
    type: AuthActionTypes.logoutUser
  };
};

const catchLoginRegisterError = (err: any, dispatch: Dispatch) => {
  if (err.response && err.response.data && err.response.data.error) {
    dispatch(setAuthErrors(err.response.data.error));
  } else {
    alert("დაფიქსირდა შეცდომა");
  }
};
