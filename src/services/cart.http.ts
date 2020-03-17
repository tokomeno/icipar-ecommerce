import { axiosWithToken } from "../api/axios-with-token";
import { APPLY_POROMOTION } from "../api/endpoints";
import { ICartState } from "../redux/cart/cartTypes";

export class CartService {
  static applyPromotion(code: string) {
    return axiosWithToken.post<{ data: ICartState }>(APPLY_POROMOTION, {
      code: code
    });
  }
}
