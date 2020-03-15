import {
  FavoritesActionsType,
  SetFavoritesAction,
  SetFavoritesLoadingProductIdAction
} from "./favoritesTypes";
import { Dispatch } from "redux";
import { FavoritesService } from "../../services/favorites.http";

export const fetchFavorites: Function = () => {
  return async (dispatch: Dispatch) => {
    FavoritesService.getAll()
      .then(res => {
        dispatch<SetFavoritesAction>({
          type: FavoritesActionsType.setFavorites,
          payload: res.data.data
        });
      })
      .catch(err => {
        console.log(err);
        // alert("დაფიქსირდა შეცდომა");
      });
  };
};

export const toggleFavorite: (productId: number) => void = (
  productId: number
) => {
  return (dispatch: Dispatch) => {
    dispatch<SetFavoritesLoadingProductIdAction>({
      payload: productId,
      type: FavoritesActionsType.loadingItemId
    });
    FavoritesService.toogle(productId).then(res => {
      dispatch<SetFavoritesAction>({
        type: FavoritesActionsType.setFavorites,
        payload: res.data.data
      });
    });
  };
};
