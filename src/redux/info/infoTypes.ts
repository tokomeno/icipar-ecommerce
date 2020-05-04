import { IBranch } from "../../services/branch.http";
import {
  SetSocialAndContactInfoAction,
  SetPorductDeliveryTermsAction,
  SetBrnachesAction,
  SetLayoutCatrogiresAction,
  SetUserHasBeenBlockedAction,
} from "./infoActions";
import { IMenuCatrogy } from "../../services/layout.http";

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
  layoutCategories: IMenuCatrogy[];
  is_user_blocked: false | string;
}

export interface ISocial {
  social: string;
  link: string;
}

export enum InfoActionTypes {
  SetSocialAndContactInfo,
  SetPorductDeliveryTerms,
  SetBrnaches,
  SetLayoutCatrogires,
  SetUserHasBeenBlocked,
}

export type InfoActions =
  | SetSocialAndContactInfoAction
  | SetPorductDeliveryTermsAction
  | SetBrnachesAction
  | SetLayoutCatrogiresAction
  | SetUserHasBeenBlockedAction;
