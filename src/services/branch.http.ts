import { axiosWithToken } from "../api/axios-with-token";
import { GET_BRANCHES } from "../api/endpoints";

export interface IBranch {
  id: number;
  name: string;
  city_id: number;
  full_address: string;
  phone: string;
  opening_hours: string | null;
  lat: string;
  lng: string;
}

export class BranchService {
  static getAll() {
    return axiosWithToken.get<{ data: IBranch[] }>(GET_BRANCHES);
  }
}
