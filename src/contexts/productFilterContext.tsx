import React, { createContext, useState, useCallback } from "react";
import queryString from "query-string";

export interface IFilterCheckboxes {
  categories: (string | number)[];
  aromas: (string | number)[];
  genders: (string | number)[];
  brands: (string | number)[];
  collections: (string | number)[];
  usages: (string | number)[];
  smells: (string | number)[];
  color_groups: (string | number)[];
  countries: (string | number)[];
  release_years: (string | number)[];
  ////////////////
  volume_range: (string | number)[];
  age_range: (string | number)[];
  discount_range: (string | number)[];
}

const defaultData: IProductFilterRequestParameter = {
  categories: [],
  aromas: [],
  genders: [],
  brands: [],
  collections: [],
  usages: [],
  smells: [],
  color_groups: [],
  countries: [],
  order: "-price",
  release_years: [],

  ////////////////
  volume_range: [],
  age_range: [],
  discount_range: [],
};

export type IProductFilterRequestParameter = Partial<IFilterCheckboxes> & {
  order?: "price" | "-price";
  keyword?: string;
  price_range?: [number, number];
};

interface IPorductFilterContext {
  productFilterData: IProductFilterRequestParameter;
  setFilterOnKey: (
    ids: (number | string)[],
    filterName: keyof IFilterCheckboxes
  ) => void;
  setFilterFromParams: () => void;
  setNewKeyword: (keyword: string) => void;
  setPriceRange: (price: [number, number]) => void;
  setPriceSorter: (order: "price" | "-price") => void;
}

export const PorductFilterContext = createContext<IPorductFilterContext>(
  {} as IPorductFilterContext
);

export const PorductFilterProvider: React.FC<{}> = ({ children }) => {
  const [productFilterData, setProductFilterData] = useState<
    IProductFilterRequestParameter
  >(defaultData);

  const setFilterFromParams = useCallback(() => {
    setProductFilterData(getQueryParamsFromUrl());
  }, []);

  const setFilterOnKey: IPorductFilterContext["setFilterOnKey"] = useCallback(
    (ids, filterKey) => {
      setProductFilterData((prevState) => ({ ...prevState, [filterKey]: ids }));
    },
    [setProductFilterData]
  );

  const setNewKeyword = useCallback(
    (keyword: string) => {
      setProductFilterData((prevState) => ({ ...prevState, keyword: keyword }));
    },
    [setProductFilterData]
  );

  const setPriceRange: IPorductFilterContext["setPriceRange"] = useCallback(
    (prices) => {
      setProductFilterData((prevState) => ({
        ...prevState,
        price_range: prices,
      }));
    },
    [setProductFilterData]
  );

  const setPriceSorter: IPorductFilterContext["setPriceSorter"] = useCallback(
    (order) => {
      setProductFilterData((prevState) => ({ ...prevState, order: order }));
    },
    [setProductFilterData]
  );

  return (
    <PorductFilterContext.Provider
      value={{
        productFilterData,
        setFilterOnKey,
        setNewKeyword,
        setFilterFromParams,
        setPriceRange,
        setPriceSorter,
      }}
    >
      {children}
    </PorductFilterContext.Provider>
  );
};

const getQueryParamsFromUrl = () => {
  try {
    const q = window.location.search;
    if (q.length) {
      const filterData = queryString.parse(q, {
        arrayFormat: "bracket",
        parseNumbers: true,
      });

      if (!isValidPriceRange(filterData)) {
        delete filterData.price_range;
      }

      return filterData;
    }
  } catch (err) {
    console.error(err);
  }
  return defaultData;
};

const isValidPriceRange = (filterData: any): boolean => {
  return (
    filterData.price_range &&
    Array.isArray(filterData.price_range) &&
    filterData.price_range.length === 2
  );
};
