import { axiosWithToken } from "../api/axios-with-token";
import {
  LAYTEST_BLOG_POST,
  LAYOUT_BRNADS,
  PRODUCT_CATEGORIES,
  DAYLY_OFFER
} from "../api/endpoints";
import { IBrandSliderItem } from "../data/brands";

export interface ICategory {
  id: number;
  title: string;
}
export type IMenuCatrogy = ICategory & {
  brands: {
    [key: string]: { name: string; slug: string }[];
  };
};

export class LayoutService {
  static latestBlog() {
    return axiosWithToken.get<{ data: any }>(LAYTEST_BLOG_POST);
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
    return axiosWithToken.get<{ data: any }>(DAYLY_OFFER);
  }
}
