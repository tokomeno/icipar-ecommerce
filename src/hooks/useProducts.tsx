import { useState, useEffect } from "react";
import { IProduct } from "../data/product";
import axios from "axios";
import { FETCH_PRODUCTS_URL } from "../api/endpoints";

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

type ILinks = {
  first: string;
  last: string;
  prev?: null | string;
  next?: null | string;
};

type IMeta = {
  from: number;
  to: number;
  current_page: number;
  last_page: number;
  total: number;
  path: string;
  per_page: number;
};

export enum ascOrDesc {
  asc = "asc",
  desc = "desc"
}

export type ISortByPrice = (ascOrDesc: ascOrDesc) => void;

//  (ascDesc: "asc" | "desc") => {};

export const useProducts = (productFilter: IProductFilter = {}) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [links, setLinks] = useState<ILinks>();
  const [sortedBy, setSortedBy] = useState<ascOrDesc>(ascOrDesc.asc);
  // const [meta, setMeta] = useState<IMeta[]>();

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
      axios.post(links.next, productFilter).then(res => {
        console.log(res.data);
        setProducts(prevState => {
          return [...prevState, ...res.data.data];
        });
        setLinks(res.data.links);
      });
    }
  };

  useEffect(() => {
    axios.post(FETCH_PRODUCTS_URL, productFilter).then(res => {
      console.log(res.data);
      setProducts(res.data.data);
      setLinks(res.data.links);
    });
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
