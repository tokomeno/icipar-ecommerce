import { axiosWithToken } from "../api/axios-with-token";
import {
  LAYTEST_BLOG_POST,
  LAYOUT_BRNADS,
  PRODUCT_CATEGORIES,
  DAYLY_OFFER,
  GETBANNER,
} from "../api/endpoints";
import { IBrandSliderItem } from "./brand.http";

export interface IBanner {
  image: string;
  advertisement_number: number;
}
export interface IDailyOffer {
  product_id: number;
  title: string;
  thumbnail: string;
  original_price: number;
  discounted_price: number;
  discount_rate: number;
  slug: string;
}

export interface ILatestBlogPost {
  id: number;
  slug: string;
  title: string;
  thumbnail: string;
}
export interface ICategory {
  id: number;
  title: string;
}
export type IMenuCatrogy = ICategory & {
  brands: {
    [key: string]: { name: string; slug: string; id: number }[];
  };
};

export class LayoutService {
  static latestBlog() {
    return axiosWithToken.get<{ data: ILatestBlogPost }>(LAYTEST_BLOG_POST);
  }

  static brands(cargoryId: number) {
    return axiosWithToken.get<{ data: IBrandSliderItem }>(
      LAYOUT_BRNADS + cargoryId
    );
  }

  static productCategories() {
    return axiosWithToken.get<{ data: IMenuCatrogy[] }>(PRODUCT_CATEGORIES);
  }

  static dailyOffer() {
    return axiosWithToken.get<{ data: IDailyOffer }>(DAYLY_OFFER);
  }

  static getBanner(id: number) {
    return axiosWithToken.get<{ data: any }>(GETBANNER + id);
  }
}
