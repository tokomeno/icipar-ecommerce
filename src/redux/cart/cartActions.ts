import {
  CartActionsType,
  SetCartAction,
  SetLoadingItemIdAction,
  ICartState,
  SetErrorAction,
  ICartItem
} from "./cartTypes";
import { Dispatch } from "redux";
import {
  CART_TOGGLE,
  GET_CART,
  ADD_GIFT_CART_TO_CART,
  REMOVE_GIFT_CART_TO_CART
} from "../../api/endpoints";
import { axiosWithToken } from "../../api/axios-with-token";
import { AxiosResponse } from "axios";
import { store } from "../store";
import { IGiftCardErrors } from "../../pages/gift-card/gift-card-page";

export const fetchCart: Function = () => {
  return async (dispatch: Dispatch) => {
    axiosWithToken
      .get<{ data: { items: ICartItem[]; original_amount: number } & any }>(
        GET_CART
      )
      .then(res => {
        dispatch<SetCartAction>({
          type: CartActionsType.setCart,
          payload: res.data.data
        });
      })
      .catch(err => {
        console.log(err);
        // alert("დაფიქსირდა შეცდომა");
      });
  };
};

export const increaseItem: (itemId: number) => void = (itemId: number) => {
  const item = store.getState().cart.itemsByKeys[itemId];
  const qnty = item ? item.items_count + 1 : 1;
  return (dispatch: Dispatch) => {
    dispatch<SetLoadingItemIdAction>({
      type: CartActionsType.loadingItemId,
      payload: itemId
    });
    toogleItemRequest(itemId, qnty).then(res => {
      dispatch<SetCartAction>({
        type: CartActionsType.setCart,
        payload: res.data.data
      });
    });
  };
};

export const decreaseItem: (itemId: number) => void = (itemId: number) => {
  const item = store.getState().cart.itemsByKeys[itemId];
  const qnty = item ? item.items_count - 1 : 0;
  return (dispatch: Dispatch) => {
    dispatch<SetLoadingItemIdAction>({
      type: CartActionsType.loadingItemId,
      payload: itemId
    });
    toogleItemRequest(itemId, qnty).then(res => {
      dispatch<SetCartAction>({
        type: CartActionsType.setCart,
        payload: res.data.data
      });
    });
  };
};

export const changeQnty: (itemId: number, qnty: number) => void = (
  itemId: number,
  qnty: number
) => {
  return (dispatch: Dispatch) => {
    dispatch<SetLoadingItemIdAction>({
      type: CartActionsType.loadingItemId,
      payload: itemId
    });
    toogleItemRequest(itemId, qnty).then(res => {
      dispatch<SetCartAction>({
        type: CartActionsType.setCart,
        payload: res.data.data
      });
    });
  };
};

export const removeItem: (itemId: number) => void = (itemId: number) => {
  return (dispatch: Dispatch) => {
    dispatch<SetLoadingItemIdAction>({
      type: CartActionsType.loadingItemId,
      payload: itemId
    });
    toogleItemRequest(itemId, 0).then(res => {
      dispatch<SetCartAction>({
        type: CartActionsType.setCart,
        payload: res.data.data
      });
    });
  };
};

export const addGiftCart: (
  requestData: { amount: number; card_type: string },
  success_cb: Function,
  error_cb: (m: IGiftCardErrors) => void
) => void = (requestData, success_cb, error_cb) => {
  return (dispatch: Dispatch) => {
    dispatch(setCartErrors({}));
    axiosWithToken
      .post(ADD_GIFT_CART_TO_CART, requestData)
      .then(res => {
        dispatch<SetCartAction>({
          type: CartActionsType.setCart,
          payload: res.data.data
        });
        success_cb();
      })
      .catch(err => {
        console.error(err.response.data);
        if (err.response.data) {
          error_cb(err.response.data);
        }
      });
  };
};

export const removeGiftCart: () => void = () => {
  return (dispatch: Dispatch) => {
    dispatch(setCartErrors({}));
    axiosWithToken
      .post(REMOVE_GIFT_CART_TO_CART)
      .then(res => {
        dispatch<SetCartAction>({
          type: CartActionsType.setCart,
          payload: res.data.data
        });
      })
      .catch(err => console.error(err));
  };
};

const toogleItemRequest = (
  itemId: number,
  items_count: number
): Promise<AxiosResponse<{
  data: { items: ICartItem[]; original_amount: number } & any;
}>> => {
  return axiosWithToken.post<{
    data: { items: ICartItem[]; original_amount: number };
  }>(CART_TOGGLE + `?item_id=${itemId}&items_count=${items_count}`);
};

export const setCartErrors = (
  errors: ICartState["errors"]
): SetErrorAction => ({
  type: CartActionsType.setErrors,
  payload: errors
});
