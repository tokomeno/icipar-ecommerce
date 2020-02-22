import {
  SetSocialAndContactInfoAction,
  SetPorductDeliveryTermsAction
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
}

export interface ISocial {
  social: string;
  link: string;
}

export enum InfoActionTypes {
  setSocialAndContactInfo,
  SetPorductDeliveryTerms
}

export type InfoActions =
  | SetSocialAndContactInfoAction
  | SetPorductDeliveryTermsAction;
