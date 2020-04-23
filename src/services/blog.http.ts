import { axiosWithToken } from "../api/axios-with-token";
import { FETCH_BLOGS, BLOG_SHOW, HOMEPAGE_BLOG_POSTS } from "../api/endpoints";

export interface HomePageBlogSlider {
  category_id: number;
  category_title: string;
  blog_posts: Blogpost[];
}

interface Blogpost {
  title: string;
  slug: string;
  thumbnail: string;
  excerpt: string;
}
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
  body: string;
}

export class BlogService {
  static getAll() {
    return axiosWithToken.get<{ data: IBlogList[] }>(FETCH_BLOGS);
  }

  static getBySlug(slug: string) {
    return axiosWithToken.get<{ data: IBlogShow }>(BLOG_SHOW + slug);
  }

  static homePageSlider() {
    return axiosWithToken.get<{ data: HomePageBlogSlider[] }>(
      HOMEPAGE_BLOG_POSTS
    );
  }
}
