import Axios from "axios";
import { IProductWithItems } from "../data/product";
import {
  FETCH_PRODUCT_URL,
  PRODUCT_BRANCH,
  FETCH_PRODUCTS_FILTER_DATA,
  PRODUCT_REVIEW
} from "../api/endpoints";
import { IProductFilterData } from "../hooks/useProductFilterAttributes";
import { axiosWithToken } from "../api/axios-with-token";

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

  static getFilterAttributes() {
    return Axios.get<{ data: IProductFilterData }>(FETCH_PRODUCTS_FILTER_DATA);
  }

  static reviewProduct(data: {
    product_id: number;
    comment: string;
    rate: number;
  }) {
    return axiosWithToken.post(PRODUCT_REVIEW, data);
  }
}
