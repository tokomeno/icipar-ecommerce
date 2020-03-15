import { axiosWithToken } from "../api/axios-with-token";
import { APPLY_POROMOTION } from "../api/endpoints";

export class CartService {
  static applyPromotion(code: string) {
    return axiosWithToken.post(APPLY_POROMOTION, {
      code: code
    });
  }
}
