import { axiosWithToken } from "./axios-with-token";
import { AuthService } from "../services/auth.http";

export const setAuthorizationToken = (token: string) => {
  axiosWithToken.defaults.headers.Authorization = `Bearer ${token}`;
};

export const setGenericTokenAsHeader = () => {
  return new Promise<string>((resolve, reject) => {
    try {
      let genToken = localStorage.getItem("guestUser");
      if (genToken) {
        AuthService.checkGenericToken(genToken)
          .then((res) => {
            setAuthorizationToken(genToken as string);
            resolve();
          })
          .catch((err) => {
            getAndSetFreshGenericUserToken(resolve);
          });
      } else {
        getAndSetFreshGenericUserToken(resolve);
      }
    } catch (err) {
      alert("error");
      reject(err);
    }
  });
};

const getAndSetFreshGenericUserToken = (resolve: Function) => {
  AuthService.getGenericUserToken().then((res) => {
    setAuthorizationToken(res.data.generic_user_token);
    localStorage.setItem("guestUser", res.data.generic_user_token);
    resolve();
  });
};
