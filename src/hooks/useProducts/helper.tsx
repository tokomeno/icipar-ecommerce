import { IProductFilterObject } from "../../contexts/productFilterContext";
import { FetchProductResponse, IProductFilterRequestParam } from "./types";
import queryString from "query-string";
import axios from "axios";

export const fetchProducts = (
  url: string,
  productFilterData: IProductFilterObject,
  callback: (res: FetchProductResponse) => void
): void => {
  pushQueryParamsToUrl(productFilterData);
  const filterParams = mapToRequestParams(productFilterData);
  axios
    .post<FetchProductResponse>(url, filterParams)
    .then(res => {
      callback(res.data);
    })
    .catch(err => {
      console.log(err);
      alert("error_occured");
    });
};

const pushQueryParamsToUrl = (data: any[] | object) => {
  const q = queryString.stringify(data, { arrayFormat: "bracket" });
  let newurl =
    window.location.protocol +
    "//" +
    window.location.host +
    window.location.pathname +
    `?${q}`;
  window.history.pushState({ path: newurl }, "", newurl);
};

const mapToRequestParams = (
  productFilter: IProductFilterObject
): IProductFilterRequestParam => {
  const res: IProductFilterRequestParam = {};

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

  if (
    productFilter.price_range &&
    Array.isArray(productFilter.price_range) &&
    productFilter.price_range.length === 2
  )
    res.price_range = {
      min: productFilter.price_range[0],
      max: productFilter.price_range[1]
    };
  return res;
};
