import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useRef
} from "react";
import queryString from "query-string";

export interface IChekedFilters {
  categories: (string | number)[];
  aromas: (string | number)[];
  genders: (string | number)[];
  brands: (string | number)[];
  collections: (string | number)[];
  usages: (string | number)[];
  smells: (string | number)[];
  color_groups: (string | number)[];
  countries: (string | number)[];
}

const defaultData: IProductFilterObject = {
  categories: [],
  aromas: [],
  genders: [],
  brands: [],
  collections: [],
  usages: [],
  smells: [],
  color_groups: [],
  countries: [],
  order: "-price"
};

export type IProductFilterObject = Partial<IChekedFilters> & {
  order?: "price" | "-price";
  keyword?: string;
  price_range?: {
    min: number;
    max: number;
  };
};

export type FOnFilterChange = (
  ids: (number | string)[],
  filterName: keyof IChekedFilters
) => void;

interface IPorductFilterContext {
  productFilterData: IProductFilterObject;
  setProductFilterData: React.Dispatch<
    React.SetStateAction<IProductFilterObject>
  >;
  setNewFilter: FOnFilterChange;
}

export const PorductFilterContext = createContext<IPorductFilterContext>({
  // productFilterData: defaultData,
  // setProductFilterData: () => {},
  // setNewFilter: () => {
  //   console.log("filter");
  // }
} as IPorductFilterContext);

export const PorductFilterProvider: React.FC<{}> = ({ children }) => {
  const [productFilterData, setProductFilterData] = useState<
    IProductFilterObject
  >(() => {
    // SET FILTERS FROM URL QUERY PARAMS
    try {
      const q = window.location.search;
      if (q.length) {
        const filterData = queryString.parse(q, {
          arrayFormat: "bracket",
          parseNumbers: true
        });
        return filterData;
      }
    } catch (err) {
      console.log(err);
    }
    return defaultData;
  });

  const setNewFilter: FOnFilterChange = useCallback(
    (ids, filterName) => {
      setProductFilterData(prevState => ({ ...prevState, [filterName]: ids }));
    },
    [setProductFilterData]
  );

  return (
    <PorductFilterContext.Provider
      value={{ productFilterData, setNewFilter, setProductFilterData }}
    >
      {children}
    </PorductFilterContext.Provider>
  );
};
