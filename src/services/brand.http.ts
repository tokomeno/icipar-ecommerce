import { axiosWithToken } from "../api/axios-with-token";
import { FEATURED_BRANDS, SHOW_BRAND, ALL_BRANDS } from "../api/endpoints";

export type IBrandSliderItem = {
  slug: string;
  logo: string;
};
export interface IAllBrandsResponse {
  [k: string]: {
    name: string;
    slug: string;
  }[];
}

export class BrandService {
  static getAll() {
    return axiosWithToken.get<IAllBrandsResponse>(ALL_BRANDS);
  }

  static getBySlug(slug: string) {
    return axiosWithToken.get<{ data: any }>(SHOW_BRAND + slug);
  }

  static getFeaturedBrands() {
    return axiosWithToken.get<{ data: IBrandSliderItem[] }>(FEATURED_BRANDS);
  }
}
