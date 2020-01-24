import axios from "axios";
// import { useHistory } from "react-router";
import { AuthActionTypes, IUser } from "./authTypes";
import { Dispatch } from "redux";
import { API_LOGIN_URL } from "../../api/endpoints";

interface LoginUserParams {
  email: string;
  phone: string;
  password: string;
  c_password: string;
}
export interface LoginUserAction {
  type: AuthActionTypes.logoutUser;
  payload: IUser;
}

export const loginUser = (userData: LoginUserParams): Function => {
  return async (dispatch: Dispatch) => {
    axios
      .post<IUser>(API_LOGIN_URL)
      .then(res => {
        console.log(res);
        dispatch<SetCurrentUserAction>({
          type: AuthActionTypes.setCurrentUser,
          payload: res.data.user
        });
      })
      .catch(err => {});
  };
};

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
