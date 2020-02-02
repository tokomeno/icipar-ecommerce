import { useState, useEffect, useRef } from "react";
import { IProduct } from "../../data/product";
import { FETCH_PRODUCTS_URL } from "../../api/endpoints";
import { IProductFilterObject } from "../../contexts/productFilterContext";
import { FetchProductResponse } from "./types";
import { fetchProducts } from "./helper";

export enum ascOrDesc {
  asc = "asc",
  desc = "desc"
}

export type ISortByPrice = (ascOrDesc: ascOrDesc) => void;

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

  const firstRender = useRef(true);

  useEffect(() => {
    let time = 1500;
    if (firstRender.current) {
      firstRender.current = false;
      time = 0;
    }
    const fetching = setTimeout(() => {
      fetchProducts(
        FETCH_PRODUCTS_URL,
        productFilterData,
        ({ links, data }: FetchProductResponse) => {
          setProducts(data);
          setLinks(links);
        }
      );
    }, time);
    return () => {
      clearTimeout(fetching);
    };
  }, [productFilterData]);

  return {
    products,
    links,
    nextPage,
    haveNextPage: (links && links.next) || null
  };
};
