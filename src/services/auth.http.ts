import { axiosWithToken } from "../api/axios-with-token";
import { CONFIRM_EMAIL, CONFIRM_PHONE } from "../api/endpoints";

export class AuthService {
  static confirmPhone(user_id: number, pin: number | string) {
    return axiosWithToken.post(CONFIRM_PHONE, {
      user_id,
      pin
    });
  }

  static confirmEmail(user_id: number, hash: number | string) {
    return axiosWithToken.post(CONFIRM_EMAIL, { user_id, hash });
  }
}
