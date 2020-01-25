import axios from "axios";
// import { useHistory } from "react-router";
import { AuthActionTypes, IUser, AuthState } from "./authTypes";
import { Dispatch } from "redux";
import { API_LOGIN_URL, API_REGISTER_URL } from "../../api/endpoints";

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

export const setCurrentUser = ({
  user,
  token
}: {
  user: IUser;
  token: string;
}): SetCurrentUserAction => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return {
    type: AuthActionTypes.setCurrentUser,
    payload: { user, token }
  };
};

interface LoginUserParams {
  userData: {
    email: string;
    password: string;
  };
  hideModal: () => void;
}
export const loginUser = ({
  userData,
  hideModal
}: LoginUserParams): Function => {
  return async (dispatch: Dispatch) => {
    axios
      .post(API_LOGIN_URL, userData)
      .then(res => {
        dispatch<SetCurrentUserAction>({
          type: AuthActionTypes.setCurrentUser,
          payload: res.data.user
        });
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
  };
  hideModal: () => void;
}
export const registerUser = ({
  userData,
  hideModal
}: RegisterUserParams): Function => {
  return async (dispatch: Dispatch) => {
    axios
      .post<IUser>(API_REGISTER_URL, {
        ...userData,
        name: "asdf"
      })
      .then(res => {
        dispatch<SetCurrentUserAction>({
          type: AuthActionTypes.setCurrentUser,
          payload: {
            user: res.data.user,
            token: res.data.token
          }
        });
        hideModal();
      })
      .catch(err => {
        console.log(err);
        catchLoginRegisterError(err, dispatch);
      });
  };
};

export interface LogoutUserAction {
  type: AuthActionTypes.logoutUser;
}

export const logoutUser = (): LogoutUserAction => {
  return {
    type: AuthActionTypes.logoutUser
  };
};

const catchLoginRegisterError = (err: any, dispatch: Dispatch) => {
  if (err.response && err.response.data && err.response.data.error) {
    dispatch<SetAuthErrorAction>({
      type: AuthActionTypes.setAuthErrors,
      payload: err.response.data.error
    });
  } else {
    alert("დაფიქსირდა შეცდომა");
  }
};
