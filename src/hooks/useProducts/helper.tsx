import { IProductFilterFrontEndRequestParameter } from "../../contexts/productFilterContext";
import queryString from "query-string";

export type IProductFilterBackendRequestParam = {
  keyword?: any;
  category_ids?: (number | string)[];
  aroma_ids?: (number | string)[];
  brand_ids?: (number | string)[];
  collection_ids?: (number | string)[];
  gender_ids?: (number | string)[];
  release_country_ids?: (number | string)[];
  release_years?: (number | string)[];
  usage_ids?: (number | string)[];
  color_group_ids?: (number | string)[];
  smell_ids?: (number | string)[];
  order?: "-price" | "price";
  age_range?: IFilterRange;
  discount_range?: IFilterRange;
  price_range?: IFilterRange;
  volume_range?: IFilterRange;
};

interface IFilterRange {
  min: number;
  max: number;
}

export const pushQueryParamsToUrl = (data: any[] | object) => {
  const q = queryString.stringify(data, { arrayFormat: "bracket" });
  let newurl =
    window.location.protocol +
    "//" +
    window.location.host +
    window.location.pathname +
    `?${q}`;
  window.history.pushState({ path: newurl }, "", newurl);
};

export const tranfromFrontEndFilterToBackEndFilterData = (
  productFilter: IProductFilterFrontEndRequestParameter
): IProductFilterBackendRequestParam => {
  const res: IProductFilterBackendRequestParam = {};

  if (productFilter.aromas && productFilter.aromas.length)
    res.aroma_ids = productFilter.aromas;

  if (productFilter.keyword && productFilter.keyword.length)
    res.keyword = productFilter.keyword;

  if (productFilter.brands && productFilter.brands.length)
    res.brand_ids = productFilter.brands;

  if (productFilter.categories && productFilter.categories.length)
    res.category_ids = productFilter.categories;

  if (productFilter.collections && productFilter.collections.length)
    res.collection_ids = productFilter.collections;

  if (productFilter.color_groups && productFilter.color_groups.length)
    res.color_group_ids = productFilter.color_groups;

  if (productFilter.countries && productFilter.countries.length)
    res.release_country_ids = productFilter.countries;

  if (productFilter.genders && productFilter.genders.length)
    res.gender_ids = productFilter.genders;

  if (productFilter.order && productFilter.order.length)
    res.order = productFilter.order;

  if (productFilter.smells && productFilter.smells.length)
    res.smell_ids = productFilter.smells;

  if (productFilter.usages && productFilter.usages.length)
    res.usage_ids = productFilter.usages;

  if (productFilter.release_years && productFilter.release_years.length)
    res.release_years = productFilter.release_years;

  if (productFilter.volume_range && productFilter.volume_range.length) {
    res.volume_range = getMinAndMaxValues(productFilter.volume_range);
  }
  if (productFilter.discount_range && productFilter.discount_range.length) {
    res.discount_range = getMinAndMaxValues(productFilter.discount_range);
  }
  if (productFilter.age_range && productFilter.age_range.length) {
    res.age_range = getMinAndMaxValues(productFilter.age_range);
  }

  if (
    productFilter.price_range &&
    Array.isArray(productFilter.price_range) &&
    productFilter.price_range.length === 2
  )
    res.price_range = {
      min: productFilter.price_range[0],
      max: productFilter.price_range[1],
    };
  return res;
};

const getMinAndMaxValues = (arr: string[]): { min: number; max: number } => {
  let a: any[][] = arr.map((item) => item.split("-"));
  let b = []
    .concat(...(a as any))
    .map((st) => parseFloat(st))
    .sort((a, b) => a - b);

  return {
    min: b[0],
    max: b[b.length - 1],
  };
};
