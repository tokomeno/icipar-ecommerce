import { IProductWithItems, ICartItem } from "../../data/product";

export interface ICartState {
  items: ICartItem[];
  itemsByKeys: { [key: number]: ICartItem | null };
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
  };
}

export type CartActions = SetCartAction;
