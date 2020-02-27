import { axiosWithToken } from "../api/axios-with-token";
import { FETCH_BLOGS, BLOG_SHOW } from "../api/endpoints";

export interface IBlogList {
  slug: string;
  title: string;
  thumbnail: string;
  created_at: string;
  excerpt: string;
}

export interface IBlogShow {
  slug: string;
  title: string;
  thumbnail: string;
  created_at: string;
  excerpt: string;
}

export class BlogService {
  static getAll() {
    return axiosWithToken.get<{ data: IBlogList[] }>(FETCH_BLOGS);
  }

  static getBySlug(slug: string) {
    return axiosWithToken.get<{ data: IBlogList }>(BLOG_SHOW + slug);
  }
}
