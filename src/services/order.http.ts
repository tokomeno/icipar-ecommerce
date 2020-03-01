import { axiosWithToken } from "../api/axios-with-token";
import { GET_ORDERS, COMPLAINT_ORDER } from "../api/endpoints";

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
  id: number;
  product_id: number;
}
export interface IOrder {
  id: number;
  paid_amount: number;
  estimated_delivery_date: string;
  delivery_status: "PROCESSING" | "TAKEN_BY_POST" | "FINISHED";
  items: Item[];
  bundles: Bundle[];
  gift_cards: { amount: number };
}

export class OrderService {
  static getAll() {
    return axiosWithToken.get<{ data: IOrder[] }>(GET_ORDERS);
  }
  static complaint(requestData: {
    complaint: string | null;
    order_id: number;
  }) {
    return axiosWithToken.post(COMPLAINT_ORDER, requestData);
  }
}
