import {
  CartActionsType,
  SetCartAction,
  SetLoadingItemIdAction
} from "./cartTypes";
import { ICartItem } from "../../data/product";
import { Dispatch } from "redux";
import { CART_TOGGLE, GET_CART } from "../../api/endpoints";
import { axiosWithToken } from "../../api/axios-with-token";
import { AxiosResponse } from "axios";
import { store } from "../store";

export const fetchCart: Function = () => {
  return async (dispatch: Dispatch) => {
    axiosWithToken
      .get<{ data: { items: ICartItem[]; original_amount: number } }>(GET_CART)
      .then(res => {
        dispatch<SetCartAction>({
          type: CartActionsType.setCart,
          payload: {
            items: res.data.data.items,
            totalPrice: res.data.data.original_amount
          }
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
        payload: {
          items: res.data.data.items,
          totalPrice: res.data.data.original_amount
        }
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
        payload: {
          items: res.data.data.items,
          totalPrice: res.data.data.original_amount
        }
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
        payload: {
          items: res.data.data.items,
          totalPrice: res.data.data.original_amount
        }
      });
    });
  };
};

const toogleItemRequest = (
  itemId: number,
  items_count: number
): Promise<AxiosResponse<{
  data: { items: ICartItem[]; original_amount: number };
}>> => {
  return axiosWithToken.post<{
    data: { items: ICartItem[]; original_amount: number };
  }>(CART_TOGGLE + `?item_id=${itemId}&items_count=${items_count}`);
};
