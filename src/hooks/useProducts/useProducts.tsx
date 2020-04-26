import { useState, useEffect, useRef } from "react";
import { FETCH_PRODUCTS_URL } from "../../api/endpoints";
import { IProductFilterFrontEndRequestParameter } from "../../contexts/productFilterContext";
import { useToggle } from "../common/useToggle";
import {
  IProduct,
  ProductService,
  FetchProductResponse,
} from "../../services/product.http";

export enum ascOrDesc {
  asc = "asc",
  desc = "desc",
}

export type ISortByPrice = (ascOrDesc: ascOrDesc) => void;

export const useProducts = (
  productFilterData: IProductFilterFrontEndRequestParameter
) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [links, setLinks] = useState<FetchProductResponse["links"]>();
  const {
    isActive: isLoading,
    setActive: startLoading,
    setInActive: stopLoading,
  } = useToggle(true);
  const {
    isActive: isLoadingNexPage,
    setActive: startLoadingNexPage,
    setInActive: stopLoadingNexPage,
  } = useToggle(false);

  const nextPage = () => {
    if (links && links.next) {
      startLoadingNexPage();
      ProductService.fetchProducts(links.next, productFilterData).then(
        ({ links, data }) => {
          setProducts((prevState) => {
            return [...prevState, ...data];
          });
          setLinks(links);
          stopLoadingNexPage();
        }
      );
    }
  };

  const firstRender = useRef(true);

  useEffect(() => {
    let time = firstRender.current ? 0 : 1000;
    if (firstRender.current) firstRender.current = false;
    const fetching = setTimeout(() => {
      startLoading();
      ProductService.fetchProducts(FETCH_PRODUCTS_URL, productFilterData).then(
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
    isLoadingNexPage,
    products,
    links,
    nextPage,
    haveNextPage: (links && links.next) || null,
  };
};
