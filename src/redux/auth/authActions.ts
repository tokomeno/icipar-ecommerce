import axios from "axios";
import { useHistory } from "react-router";
import { AuthActionTypes, IUser } from "./authTypes";

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
