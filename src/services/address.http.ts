import { axiosWithToken } from "../api/axios-with-token";
import {
  ADD_USER_ADDRESSES,
  GET_USER_ADDRESSES,
  DELETE_USER_ADDRESSES,
  ADDRESS_MAKE_MAIN,
  EDIT_USER_ADDRESSES
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

  static createOrUpdate(data: {
    id: null | number;
    city_id: string;
    full_address: string;
    comment: string;
    contact_person_name: string;
    contact_person_email: string;
    contact_person_phone: string;
    is_main: boolean;
  }) {
    const url = data.id ? EDIT_USER_ADDRESSES + data.id : ADD_USER_ADDRESSES;
    return axiosWithToken.post(url, data);
  }

  static delete(id: number) {
    return axiosWithToken.post(DELETE_USER_ADDRESSES + id);
  }

  static makeMain(id: number) {
    return axiosWithToken.post(ADDRESS_MAKE_MAIN + id);
  }
}
