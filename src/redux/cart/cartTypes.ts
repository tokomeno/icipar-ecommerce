import { IProductWithItems, ICartItem } from "../../data/product";

export interface ICartState {
  items: ICartItem[];
  itemsByKeys: { [key: number]: ICartItem | null };
  totalPrice: number;
}

export enum CartActionsType {
  setCart = "setCart",
  fetchCart = "fetchCart",
  addItem = "addItem",
  removeItem = "removeItem",
  changeQnty = "changeQnty"
}

export interface SetCartAction {
  type: CartActionsType.setCart;
  payload: {
    items: ICartItem[];
    totalPrice: number;
  };
}

export type CartActions = SetCartAction;
