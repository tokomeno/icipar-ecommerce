import { CartActions, CartActionsType, ICartState } from "./cartTypes";

const cartInitState: ICartState = {
  items: [],
  itemsByKeys: {}
};

export const cartReducer = (
  state = cartInitState,
  action: CartActions
): ICartState => {
  switch (action.type) {
    case CartActionsType.setCart:
      const itemsByKeys: ICartState["itemsByKeys"] = {};
      action.payload.items.forEach(item => {
        itemsByKeys[item.item_id] = item;
      });
      return {
        ...state,
        items: action.payload.items,
        itemsByKeys: itemsByKeys
      };
    default:
      return state;
  }
};
