import { combineReducers } from "redux";
import { AuthState } from "./auth/authTypes";
import { authReducer } from "./auth/authReducer";
import { ICartState } from "./cart/cartTypes";
import { cartReducer } from "./cart/cartReducer";
import { IInfoState } from "./info/infoTypes";
import { infoReducer } from "./info/infoReducer";
import { IFavoritesState } from "./favorites/favoritesTypes";
import { favoritesReducer } from "./favorites/favoritesReducer";

export interface IStoreState {
  auth: AuthState;
  cart: ICartState;
  info: IInfoState;
  favorites: IFavoritesState;
}

export const reducers = combineReducers<IStoreState>({
  favorites: favoritesReducer,
  auth: authReducer,
  cart: cartReducer,
  info: infoReducer
});
