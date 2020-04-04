import { axiosWithToken } from "../api/axios-with-token";
import {
  CONFIRM_EMAIL,
  CONFIRM_PHONE,
  CHECK_GENERIC_TOKEN,
  CHECK_USER_TOKEN,
  GET_GENERIC_USER_TOKEN,
} from "../api/endpoints";
import Axios from "axios";

export class AuthService {
  static confirmPhone(user_id: number, pin: number | string) {
    return axiosWithToken.post(CONFIRM_PHONE, {
      user_id,
      pin,
    });
  }

  static confirmEmail(user_id: string | number, hash: number | string) {
    return axiosWithToken.post(CONFIRM_EMAIL, { user_id, hash });
  }

  static getGenericUserToken() {
    return Axios.post(GET_GENERIC_USER_TOKEN);
  }

  static checkUserToken(token: string) {
    return Axios.get(CHECK_USER_TOKEN, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  static checkGenericToken(token: string) {
    return Axios.get(CHECK_GENERIC_TOKEN, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
