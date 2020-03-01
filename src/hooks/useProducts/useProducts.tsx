import { useState, useEffect, useRef } from "react";
import { FETCH_PRODUCTS_URL } from "../../api/endpoints";
import { IProductFilterRequestParameter } from "../../contexts/productFilterContext";
import { FetchProductResponse } from "./types";
import { fetchProducts } from "./helper";
import { useToggle } from "../common/useToggle";
import { IProduct } from "../../services/product.http";

export enum ascOrDesc {
  asc = "asc",
  desc = "desc"
}

export type ISortByPrice = (ascOrDesc: ascOrDesc) => void;

export const useProducts = (
  productFilterData: IProductFilterRequestParameter
) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [links, setLinks] = useState<FetchProductResponse["links"]>();
  const {
    isActive: isLoading,
    setActive: startLoading,
    setInActive: stopLoading
  } = useToggle(true);

  const nextPage = () => {
    if (links && links.next) {
      startLoading();
      fetchProducts(
        links.next,
        productFilterData,
        ({ links, data }: FetchProductResponse) => {
          setProducts(prevState => {
            return [...prevState, ...data];
          });
          setLinks(links);
          stopLoading();
        }
      );
    }
  };

  const firstRender = useRef(true);

  useEffect(() => {
    let time = 1000;
    if (firstRender.current) {
      firstRender.current = false;
      time = 0;
    }
    const fetching = setTimeout(() => {
      startLoading();
      fetchProducts(
        FETCH_PRODUCTS_URL,
        productFilterData,
        ({ links, data }: FetchProductResponse) => {
          setProducts(data);
          setLinks(links);
          stopLoading();
        }
      );
    }, time);
    return () => {
      clearTimeout(fetching);
    };
  }, [productFilterData, startLoading, stopLoading]);

  return {
    isLoading,
    products,
    links,
    nextPage,
    haveNextPage: (links && links.next) || null
  };
};
