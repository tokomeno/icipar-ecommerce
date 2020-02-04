import { axiosWithToken } from "./axios-with-token";
import { GENERIC_USER } from "./endpoints";

export const setAuthorizationToken = (token: string) => {
  axiosWithToken.defaults.headers.Authorization = `Bearer ${token}`;
};

export const setGenericTokenAsHeader = () => {
  return new Promise<string>((resolve, reject) => {
    try {
      let genToken = localStorage.getItem("guestUser");
      if (genToken) {
        setAuthorizationToken(genToken);
        resolve();
      } else {
        axiosWithToken.post(GENERIC_USER).then(res => {
          setAuthorizationToken(res.data.generic_user_token);
          localStorage.setItem("guestUser", res.data.generic_user_token);
          resolve();
        });
      }
    } catch (err) {
      alert("erro");
      reject(err);
    }
  });
};
