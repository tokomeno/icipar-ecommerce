import { CartActions, CartActionsType, ICartState } from "./cartTypes";

const cartInitState: ICartState = {
  items: [],
  itemsByKeys: {},
  totalPrice: 0,
  original_amount: 0,
  loadingItemId: null,
  bundles: [],
  new_gift_cards: [],
  errors: {},
  promotion_code: null,
};

export const cartReducer = (
  state = cartInitState,
  action: CartActions
): ICartState => {
  switch (action.type) {
    case CartActionsType.setCart:
      const itemsByKeys: ICartState["itemsByKeys"] = {};
      action.payload.items.forEach((item) => {
        itemsByKeys[item.item_id] = item;
      });
      return {
        ...state,
        ...action.payload,
        errors: {},
        items: action.payload.items,
        itemsByKeys: itemsByKeys,
        totalPrice: action.payload.original_amount || 0,
        loadingItemId: null,
        new_gift_cards: action.payload.new_gift_cards || [],
      };
    case CartActionsType.loadingItemId:
      return {
        ...state,
        loadingItemId: action.payload,
      };
    case CartActionsType.setErrors:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
};
