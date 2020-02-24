import Axios from "axios";
import { IProductWithItems } from "../data/product";
import { FETCH_PRODUCT_URL } from "../api/endpoints";

export class ProductService {
  static getById(productId: number | string) {
    return Axios.get<{ data: IProductWithItems }>(
      `${FETCH_PRODUCT_URL}?id=${productId}`
    );
  }
}
