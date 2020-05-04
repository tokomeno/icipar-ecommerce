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
  volume_range: string[];
  age_range: string[];
  discount_range: string[];
}

const defaultData: IProductFilterFrontEndRequestParameter = {
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

export type IProductFilterFrontEndRequestParameter = Partial<
  IFilterCheckboxes
> & {
  order?: "price" | "-price";
  keyword?: string;
  price_range?: [number, number];
};

interface IPorductFilterContext {
  productFilterData: IProductFilterFrontEndRequestParameter;
  setFilterCheckbox: (
    ids: (number | string)[],
    filterName: keyof IFilterCheckboxes
  ) => void;
  setFilterFromQueryString: () => void;
  setNewKeyword: (keyword: string) => void;
  setPriceRange: (price: [number, number]) => void;
  setPriceSorter: (order: "price" | "-price") => void;
  setFilterGender: (g: "men" | "women") => void;
}

export const PorductFilterContext = createContext<IPorductFilterContext>(
  {} as IPorductFilterContext
);

export const PorductFilterProvider: React.FC<{}> = ({ children }) => {
  const [productFilterData, setProductFilterData] = useState<
    IProductFilterFrontEndRequestParameter
  >(defaultData);

  const setFilterFromQueryString = useCallback(() => {
    setProductFilterData(getValidatedQueryParamsFromUrl());
  }, []);

  const setFilterCheckbox: IPorductFilterContext["setFilterCheckbox"] = useCallback(
    (ids, filterKey) => {
      setProductFilterData((prevState) => ({ ...prevState, [filterKey]: ids }));
    },
    [setProductFilterData]
  );

  const setFilterGender: IPorductFilterContext["setFilterGender"] = useCallback(
    (gender) => {
      const g = {
        men: 1,
        women: 2,
      };
      setProductFilterData((prevState) => ({
        ...prevState,
        genders: [g[gender]],
      }));
    },
    []
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
        setFilterCheckbox,
        setNewKeyword,
        setFilterFromQueryString,
        setPriceRange,
        setPriceSorter,
        setFilterGender,
      }}
    >
      {children}
    </PorductFilterContext.Provider>
  );
};

// TODO: Some extra validations
const getValidatedQueryParamsFromUrl = (): IProductFilterFrontEndRequestParameter => {
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
