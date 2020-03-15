import { axiosWithToken } from "../api/axios-with-token";
import {
  ADD_USER_ADDRESSES,
  GET_USER_ADDRESSES,
  DELETE_USER_ADDRESSES,
  ADDRESS_MAKE_MAIN
} from "../api/endpoints";

export interface IAddress {
  id: number;
  city_id: number;
  is_main: boolean;
  full_address: string;
  comment: string | null;
  contact_person_name: string | number;
  contact_person_email: string | number;
  contact_person_phone: string | number;
}

export interface ICity {
  id: number;
  city: string;
}

export class AddressService {
  static getAll() {
    return axiosWithToken.get<{
      data: { cities: ICity[]; addresses: IAddress[] };
    }>(GET_USER_ADDRESSES);
  }

  static add(data: {
    city_id: string;
    full_address: string;
    comment: string;
    contact_person_name: string;
    contact_person_email: string;
    contact_person_phone: string;
  }) {
    return axiosWithToken.post(ADD_USER_ADDRESSES, data);
  }

  static delete(id: number) {
    return axiosWithToken.post(DELETE_USER_ADDRESSES + id);
  }

  static makeMain(id: number) {
    return axiosWithToken.post(ADDRESS_MAKE_MAIN + id);
  }
}
