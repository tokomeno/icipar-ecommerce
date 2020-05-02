import { axiosWithToken } from "../api/axios-with-token";
import { GET_FAVORITES, TOGGLE_FAVORITES } from "../api/endpoints";
import { IFavoritesState } from "../redux/favorites/favoritesTypes";

export class FavoritesService {
  static getAll() {
    return axiosWithToken.get<{ data: IFavoritesState["items"] }>(
      GET_FAVORITES
    );
  }
  static toogle(productId: number) {
    return axiosWithToken.post<{ data: any }>(TOGGLE_FAVORITES, {
      product_id: productId,
    });
  }
}
