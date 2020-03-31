import Axios from "axios";
import {
  FETCH_PRODUCT_URL,
  PRODUCT_BRANCH,
  FETCH_PRODUCTS_FILTER_DATA,
  PRODUCT_REVIEW,
  FETCH_BUNDLE_FOR_ITEM,
  PRODUCT_SIMILAR_TO,
  PRODUCT_OTHERS_BOUGHT,
  FETCH_PRODUCT_REVIEW
} from "../api/endpoints";
import { IProductFilterData } from "../hooks/useProductFilterAttributes";
import { axiosWithToken } from "../api/axios-with-token";
import { IProductFilterRequestParameter } from "../contexts/productFilterContext";
import { FetchProductResponse } from "../hooks/useProducts/types";
import {
  pushQueryParamsToUrl,
  mapToRequestParams
} from "../hooks/useProducts/helper";

export interface IProductPreordable {
  y: number;
  m: number;
  d: number;
  h: number;
  i: number;
  s: number;
}
export interface IProduct {
  id: number;
  title: string;
  slug?: string | null;
  qty: number;
  thumbnail: string;
  rating: number;
  price?: number;
  price_min: number;
  price_max?: number;
  main_item_id: number;
  being_sold_online: boolean;
  preorderable?: IProductPreordable;
}

export interface IProductReview {
  rate: number;
  comment: string;
  user_name: string;
  user_avatar: string;
  title?: string;
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

export interface IProductWithItems {
  id: number;
  title: string;
  rating: number;
  being_sold_online: boolean;
  details: {
    description: string;
    usage: string;
    ingredients: string;
  };
  brand: {
    name: string;
    description: string;
  };
  preorderable?: any;
  items: Item[];
}

interface Item {
  id: number;
  title: string;
  volume: number;
  thumbnail: string;
  color?: any;
  stock: number;
  price: number;
  original_price: number;
  discount_rate: number;
  images: { image: string }[];
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

  static getProductReviews(id: number) {
    return Axios.get<{ data: IProductReview[] }>(FETCH_PRODUCT_REVIEW + id);
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

  static fetchProducts(
    url: string,
    productFilterData: IProductFilterRequestParameter,
    callback: (res: FetchProductResponse) => void
  ): void {
    pushQueryParamsToUrl(productFilterData);
    const filterParams = mapToRequestParams(productFilterData);
    axiosWithToken
      .post<FetchProductResponse>(url, filterParams)
      .then(res => {
        callback(res.data);
      })
      .catch(err => {
        console.log(err);
        alert("error_occured");
      });
  }

  static getSimilar(productId: number | string) {
    return Axios.get<{ data: IProduct[] }>(`${PRODUCT_SIMILAR_TO}${productId}`);
  }

  static getOtherBought(productId: number | string) {
    return Axios.get<{ data: IProduct[] }>(
      `${PRODUCT_OTHERS_BOUGHT}${productId}`
    );
  }
}
