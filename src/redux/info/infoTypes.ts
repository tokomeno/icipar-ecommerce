import { IBranch } from "../../services/branch.http";
import {
  SetSocialAndContactInfoAction,
  SetPorductDeliveryTermsAction,
  SetBrnachesAction
} from "./infoActions";

export interface IInfoState {
  socials: ISocial[];
  contact_info: {
    phone: string;
    email: string;
  };
  product_delivery_terms: {
    content: string;
  };
  branches: IBranch[];
}

export interface ISocial {
  social: string;
  link: string;
}

export enum InfoActionTypes {
  SetSocialAndContactInfo,
  SetPorductDeliveryTerms,
  SetBrnaches
}

export type InfoActions =
  | SetSocialAndContactInfoAction
  | SetPorductDeliveryTermsAction
  | SetBrnachesAction;
