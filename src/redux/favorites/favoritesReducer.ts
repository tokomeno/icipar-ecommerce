import {
  FavoritesActions,
  FavoritesActionsType,
  IFavoritesState,
} from "./favoritesTypes";

const favoritesInitState: IFavoritesState = {
  items: [],
  itemsByKeys: {},
  loadingId: null,
};

export const favoritesReducer = (
  state = favoritesInitState,
  action: FavoritesActions
): IFavoritesState => {
  switch (action.type) {
    case FavoritesActionsType.setFavorites:
      const itemsByKeys: IFavoritesState["itemsByKeys"] = {};
      action.payload.forEach((item) => {
        itemsByKeys[item.product_id] = item;
      });
      return {
        ...state,
        ...action.payload,
        items: action.payload,
        itemsByKeys: itemsByKeys,
        loadingId: null,
      };
    case FavoritesActionsType.loadingItemId:
      return {
        ...state,
        loadingId: action.payload,
      };

    default:
      return state;
  }
};
