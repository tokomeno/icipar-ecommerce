import { axiosWithToken } from "../api/axios-with-token";
import { GET_CUSTOMER_INFO, UPDATE_CUSTOMER_FOR_ORDER } from "../api/endpoints";

export interface ICustomer {
  name: string | null;
  email: string | null;
  phone: string | null;
  id_number: string | null;
  birth_date: string | null;
  city_id: string | null;
  full_address: string | null;
}

export class CustomerService {
  static updateCustomerForOrder(data: {
    name: string;
    email: string;
    phone: string;
    id_number: string;
    birth_date: string;
    city_id: string;
    full_address: string;
  }) {
    return axiosWithToken.post<{ data: ICustomer }>(
      UPDATE_CUSTOMER_FOR_ORDER,
      data
    );
  }

  static getCustomer() {
    return axiosWithToken.get<{ data: ICustomer }>(GET_CUSTOMER_INFO);
  }
}
