import { IProductWithItems, ICartItem } from "../../data/product";

export interface ICartState {
  items: ICartItem[];
  itemsByKeys: { [key: number]: ICartItem | null };
  totalPrice: number;
  loadingItemId: number | null;
}

export enum CartActionsType {
  setCart = "setCart",
  fetchCart = "fetchCart",
  addItem = "addItem",
  removeItem = "removeItem",
  changeQnty = "changeQnty",
  loadingItemId = "loadingItemId"
}

export interface SetCartAction {
  type: CartActionsType.setCart;
  payload: {
    items: ICartItem[];
    totalPrice: number;
  };
}

export interface SetLoadingItemIdAction {
  type: CartActionsType.loadingItemId;
  payload: number | null;
}

export type CartActions = SetCartAction | SetLoadingItemIdAction;
