import { IProduct } from "../../data/product";

export interface FetchProductResponse {
  links: {
    first: string;
    last: string;
    prev?: null | string;
    next?: null | string;
  };
  meta: {
    from: number;
    to: number;
    current_page: number;
    last_page: number;
    total: number;
    path: string;
    per_page: number;
  };
  data: IProduct[];
}

export type IProductFilterRequestParam = {
  keyword?: any;
  category_ids?: (number | string)[];
  age_range?: IFilterRange;
  aroma_ids?: (number | string)[];
  brand_ids?: (number | string)[];
  collection_ids?: (number | string)[];
  price_range?: IFilterRange;
  volume_range?: IFilterRange;
  gender_ids?: (number | string)[];
  release_country_ids?: (number | string)[];
  release_years?: (number | string)[];
  usage_ids?: (number | string)[];
  color_group_ids?: (number | string)[];
  smell_ids?: (number | string)[];
  discount_range?: IFilterRange;
  order?: "-price" | "price";
};

interface IFilterRange {
  min: number;
  max: number;
}
