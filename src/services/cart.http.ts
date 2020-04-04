import { axiosWithToken } from "../api/axios-with-token";
import { APPLY_POROMOTION, CANCEL_PROMOTION } from "../api/endpoints";
import { ICartState } from "../redux/cart/cartTypes";

export class CartService {
  static applyPromotion(code: string) {
    return axiosWithToken.post<{ data: ICartState }>(APPLY_POROMOTION, {
      code: code,
    });
  }

  static cancelPromotion() {
    return axiosWithToken.post<{ data: ICartState }>(CANCEL_PROMOTION);
  }
}
