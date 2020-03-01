export interface ICartItem {
  item_id: number;
  items_count: number;
  price: number;
  original_price: number;
  discount_rate: number;
  thumbnail: string;
  item_title: string;
  amount_payable: number;
}

export interface ICartState {
  items: ICartItem[];
  itemsByKeys: { [key: number]: ICartItem | null };
  totalPrice: number;
  loadingItemId: number | null;
  bundles: [];
  original_amount: number | null;
  new_gift_cards: { amount: number; card_type: "DIGITAL" | "PHYSICAL" }[];
  errors: {
    new_gift_cards?: string | null;
  };
}

export enum CartActionsType {
  setCart = "setCart",
  fetchCart = "fetchCart",
  addItem = "addItem",
  removeItem = "removeItem",
  changeQnty = "changeQnty",
  loadingItemId = "loadingItemId",
  setErrors = "setErrors"
}

export interface SetCartAction {
  type: CartActionsType.setCart;
  payload: Omit<ICartState, "errors" | "totalPrice">;
}

export interface SetLoadingItemIdAction {
  type: CartActionsType.loadingItemId;
  payload: number | null;
}

export interface SetErrorAction {
  type: CartActionsType.setErrors;
  payload: ICartState["errors"];
}

export type CartActions =
  | SetCartAction
  | SetLoadingItemIdAction
  | SetErrorAction;
