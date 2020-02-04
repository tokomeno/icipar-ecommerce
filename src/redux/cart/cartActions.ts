import { CartActionsType, SetCartAction } from "./cartTypes";
import { ICartItem } from "../../data/product";
import { Dispatch } from "redux";
import { CART_TOGGLE, GET_CART } from "../../api/endpoints";
import { axiosWithToken } from "../../api/axios-with-token";
import { AxiosResponse } from "axios";

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
        alert("დაფიქსირდა შეცდომა");
      });
  };
};

export const changeQnty: (itemId: number, qnty: number) => void = (
  itemId: number,
  qnty: number
) => {
  return (dispatch: Dispatch) => {
    console.log("in");
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

export const removeItem = (item: ICartItem) => {
  return (dispatch: Dispatch) => {
    toogleItemRequest(item.item_id, 0).then(res => {
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
