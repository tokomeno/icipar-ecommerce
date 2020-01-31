import { useState, useEffect } from "react";
import { IProduct } from "../data/product";
import axios from "axios";
import { FETCH_PRODUCTS_URL } from "../api/endpoints";
import { IProductFilterObject } from "../pages/catalog/catalog-page";
import queryString from "query-string";

interface FetchProductResponse {
  links: {
    first: string;
    last: string;
    prev?: null | string;
    next?: null | string;
  };
  meta: {
    from: number;
    to: number;
    current_page: number;
    last_page: number;
    total: number;
    path: string;
    per_page: number;
  };
  data: IProduct[];
}

export type IProductFilterRequestParam = {
  keyword?: string;
  category_ids?: number[];
  age_range?: {
    min: number;
    max: number;
  };
  aroma_ids?: number[];
  brand_ids?: number[];
  collection_ids?: number[];
  price_range?: {
    min: number;
    max: number;
  };
  volume_range?: {
    min: number;
    max: number;
  };
  gender_ids?: number[];
  order?: "-price" | "price";
};

export enum ascOrDesc {
  asc = "asc",
  desc = "desc"
}

export type ISortByPrice = (ascOrDesc: ascOrDesc) => void;

const fetchProducts = (
  url: string,
  productFilterData: IProductFilterObject,
  callback: Function
): void => {
  let a = queryString.stringify(productFilterData);
  console.log(a, queryString.parse(a));

  let newurl =
    window.location.protocol +
    "//" +
    window.location.host +
    window.location.pathname +
    `?${a}`;
  window.history.pushState({ path: newurl }, "", newurl);

  axios
    .post<FetchProductResponse>(url, {})
    .then(res => {
      callback(res.data);
    })
    .catch(err => {
      console.log(err);
      alert("error_occured");
    });
};

export const useProducts = (productFilterData: IProductFilterObject) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [links, setLinks] = useState<FetchProductResponse["links"]>();

  const nextPage = () => {
    if (links && links.next) {
      fetchProducts(
        links.next,
        productFilterData,
        ({ links, data }: FetchProductResponse) => {
          setProducts(prevState => {
            return [...prevState, ...data];
          });
          setLinks(links);
        }
      );
    }
  };

  useEffect(() => {
    fetchProducts(
      FETCH_PRODUCTS_URL,
      productFilterData,
      ({ links, data }: FetchProductResponse) => {
        setProducts(data);
        setLinks(links);
      }
    );
  }, [productFilterData]);

  return {
    products,
    links,
    nextPage,
    haveNextPage: (links && links.next) || null
  };
};
