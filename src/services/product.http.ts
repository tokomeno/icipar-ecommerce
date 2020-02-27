import Axios from "axios";
import { IProductWithItems } from "../data/product";
import { FETCH_PRODUCT_URL, PRODUCT_BRANCH } from "../api/endpoints";

export class ProductService {
  static getById(productId: number | string) {
    return Axios.get<{ data: IProductWithItems }>(
      `${FETCH_PRODUCT_URL}?id=${productId}`
    );
  }

  static getBranchesForProduct(productId: number | string) {
    return Axios.get<{ data: { full_address: string }[] }>(PRODUCT_BRANCH, {
      params: { product_id: productId }
    });
  }
}
