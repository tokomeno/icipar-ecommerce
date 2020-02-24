import { axiosWithToken } from "../api/axios-with-token";
import { MAIN_SECITIONS, MAIN_CAROUSEL } from "../api/endpoints";

export interface ISectionSliders {
  latest_product: Latestproduct[];
  bundle: Latestproduct[];
  post_small: Latestproduct[];
  post_large: Latestproduct[];
  post_arrowed: Latestproduct[];
}

export interface Latestproduct {
  section_type: string;
  image: string;
  title: string;
  subtitle: string;
  link: string;
}

export interface ISlider {
  image: string;
  title: string;
  link_href: string;
  link_title: string;
}

export class SliderService {
  static getSection() {
    return axiosWithToken.get<ISectionSliders>(MAIN_SECITIONS);
  }

  static getMainSlider() {
    return axiosWithToken.get<{ data: ISlider[] }>(MAIN_CAROUSEL);
  }
}
