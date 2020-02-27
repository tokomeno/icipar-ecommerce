import { axiosWithToken } from "../api/axios-with-token";
import { GET_ORDERS } from "../api/endpoints";

export interface IOrder {}

export class OrderService {
  static getAll() {
    return axiosWithToken.get<{ data: IOrder[] }>(GET_ORDERS);
  }
}
