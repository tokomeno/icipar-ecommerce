import { axiosWithToken } from "../api/axios-with-token";
import {
  FEATURED_BRANDS,
  SHOW_BRAND,
  ALL_BRANDS,
  BRAND_IN_SEARCH,
} from "../api/endpoints";

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

export interface IBrandShow {
  name: string;
  banner: string;
  logo: string;

  history: string;

  how_started_photo: string;
  how_started_text: string;

  where_founded_photo: string;
  where_founded_text: string;

  latest_collection_photo: string;
  latest_collection_text: string;
}

export interface IBrandCatalogSlider {
  id: number;
  name: string;
  banners: string[];
  links: string[];
  logo: string;
  slug: string;
}

export class BrandService {
  static getAll() {
    return axiosWithToken.get<IAllBrandsResponse>(ALL_BRANDS);
  }

  static getBySlug(slug: string) {
    return axiosWithToken.get<{ data: IBrandShow }>(SHOW_BRAND + slug);
  }

  static getFeaturedBrands() {
    return axiosWithToken.get<{ data: IBrandSliderItem[] }>(FEATURED_BRANDS);
  }

  static getCatalogBrandSlider(brandId: number) {
    return axiosWithToken.get<{ data: IBrandCatalogSlider }>(
      BRAND_IN_SEARCH + "?brand_id=" + brandId
    );
  }
}
