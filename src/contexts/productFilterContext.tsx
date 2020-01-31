import React, { useContext, createContext, useState } from "react";

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

const defaultData: IChekedFilters = {
  categories: [],
  aromas: [],
  genders: [],
  brands: [],
  collections: [],
  usages: [],
  smells: [],
  color_groups: [],
  countries: []
};

export const PorductFilterContext = createContext(defaultData);

export const PorductFilterProvider: React.FC<{}> = ({ children }) => {
  const [productFilterData, setProductFilterData] = useState(defaultData);
  return (
    <PorductFilterContext.Provider value={productFilterData}>
      {children}
    </PorductFilterContext.Provider>
  );
};
