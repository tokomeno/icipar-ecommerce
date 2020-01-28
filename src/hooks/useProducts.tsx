import { useState, useEffect } from "react";
import { IProduct } from "../data/product";
import axios from "axios";
import { FETCH_PRODUCTS_URL } from "../api/endpoints";

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

export type IProductFilter = {
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
  order?: "-price";
};

export enum ascOrDesc {
  asc = "asc",
  desc = "desc"
}

export type ISortByPrice = (ascOrDesc: ascOrDesc) => void;

const fetchProducts = (
  url: string,
  filtes: IProductFilter,
  callback: Function
): void => {
  axios
    .post<FetchProductResponse>(url, filtes)
    .then(res => {
      callback(res.data);
    })
    .catch(err => {
      console.log(err);
      alert("error_occured");
    });
};

export const useProducts = (productFilter: IProductFilter = {}) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [links, setLinks] = useState<FetchProductResponse["links"]>();
  const [sortedBy, setSortedBy] = useState<ascOrDesc>(ascOrDesc.asc);

  const sortByPrice: ISortByPrice = asc_or_desc => {
    console.log(asc_or_desc);
    setSortedBy(asc_or_desc);
    setProducts(prevState => {
      return [...prevState].sort((a, b) => {
        if (asc_or_desc === ascOrDesc.asc) return a.price_min - b.price_min;
        else return b.price_min - a.price_min;
      });
    });
  };

  const nextPage = () => {
    if (links && links.next) {
      fetchProducts(
        links.next,
        productFilter,
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
      productFilter,
      ({ links, data }: FetchProductResponse) => {
        setProducts(data);
        setLinks(links);
      }
    );
  }, [productFilter]);

  return {
    products,
    sortByPrice,
    sortedBy,
    links,
    nextPage,
    haveNextPage: (links && links.next) || null
  };
};
