import Axios from "axios";
import { axiosWithToken } from "../api/axios-with-token";
import { IBlogList } from "../data/blog";
import { FETCH_BLOGS } from "../api/endpoints";

export class BlogService {
  static getAll() {
    return axiosWithToken.get<{ data: IBlogList[] }>(FETCH_BLOGS);
  }
}
