import { axiosWithToken } from "../api/axios-with-token";
import { GET_ORDERS } from "../api/endpoints";

interface Bundle {
  title: string;
  thumbnail: string;
  paid_amount: number;
}

interface Item {
  title: string;
  thumbnail: string;
  items_count: number;
  original_price: number;
  paid_amount: number;
  is_preorder: number;
}
export interface IOrder {
  paid_amount: number;
  estimated_delivery_date: string;
  delivery_status: "processing" | "taken_by_post" | "delivered";
  items: Item[];
  bundles: Bundle[];
  gift_cards: { amount: number };
}

export class OrderService {
  static getAll() {
    return axiosWithToken.get<{ data: IOrder[] }>(GET_ORDERS);
  }
}
