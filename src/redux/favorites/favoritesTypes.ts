export interface IFavoritesItem {
  id: number;
  thumbnail: string;
  product_id: number;
  title: string;
  price?: number;
  slug: string;
  item_id: number;
}

export interface IFavoritesState {
  items: IFavoritesItem[];
  itemsByKeys: { [key: number]: IFavoritesItem | null };
  loadingId: number | null;
}

export enum FavoritesActionsType {
  setFavorites = "setFavorites",
  fetchFavorites = "fetchFavorites",
  loadingItemId = "loadingItemId",
}

export interface SetFavoritesAction {
  type: FavoritesActionsType.setFavorites;
  payload: IFavoritesState["items"];
}

export interface SetFavoritesLoadingProductIdAction {
  type: FavoritesActionsType.loadingItemId;
  payload: number | null;
}

export type FavoritesActions =
  | SetFavoritesAction
  | SetFavoritesLoadingProductIdAction;
