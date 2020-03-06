import { axiosWithToken } from "../api/axios-with-token";
import {
  LAYTEST_BLOG_POST,
  LAYOUT_BRNADS,
  PRODUCT_CATEGORIES
} from "../api/endpoints";

export interface ICategory {
  id: number;
  title: string;
}

export class LayoutService {
  static latestBlog() {
    return axiosWithToken.get<{ data: any }>(LAYTEST_BLOG_POST);
  }

  static brands(cargoryId: number) {
    return axiosWithToken.get<{ data: any }>(LAYOUT_BRNADS + cargoryId);
  }

  static productCategories() {
    return axiosWithToken.get<{ data: ICategory[] }>(PRODUCT_CATEGORIES);
  }
}
