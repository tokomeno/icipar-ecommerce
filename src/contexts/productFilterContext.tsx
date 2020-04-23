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
};

export type IProductFilterRequestParameter = Partial<IFilterCheckboxes> & {
  order?: "price" | "-price";
  keyword?: string;
  price_range?: [number, number];
};

export type FOnFilterChange = (
  ids: (number | string)[],
  filterName: keyof IFilterCheckboxes
) => void;

interface IPorductFilterContext {
  productFilterData: IProductFilterRequestParameter;
  setProductFilterData: React.Dispatch<
    React.SetStateAction<IProductFilterRequestParameter>
  >;
  setFilterOnKey: FOnFilterChange;
  setFilterFromParams: () => void;
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

  const setFilterOnKey: FOnFilterChange = useCallback(
    (ids, filterKey) => {
      setProductFilterData((prevState) => ({ ...prevState, [filterKey]: ids }));
    },
    [setProductFilterData]
  );

  return (
    <PorductFilterContext.Provider
      value={{
        productFilterData,
        setFilterOnKey,
        setProductFilterData,
        setFilterFromParams,
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
