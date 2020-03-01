import Axios from "axios";
import { IProductWithItems } from "../data/product";
import {
  FETCH_PRODUCT_URL,
  PRODUCT_BRANCH,
  FETCH_PRODUCTS_FILTER_DATA,
  PRODUCT_REVIEW,
  FETCH_BUNDLE_FOR_ITEM
} from "../api/endpoints";
import { IProductFilterData } from "../hooks/useProductFilterAttributes";
import { axiosWithToken } from "../api/axios-with-token";

export interface IProduct {
  id: number;
  title: string;
  qty: number;
  thumbnail: string;
  rating: number;
  price?: number;
  price_min: number;
  price_max?: number;
  main_item_id: number;
}

export interface IProductBundle {
  id: number;
  price: number;
  items: {
    title: string;
    thumbnail: string;
    price: number;
  }[];
}

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

  static getBundleForItem(item_id: number) {
    return axiosWithToken.get<{ data: IProductBundle }>(
      FETCH_BUNDLE_FOR_ITEM + item_id
    );
  }
}
