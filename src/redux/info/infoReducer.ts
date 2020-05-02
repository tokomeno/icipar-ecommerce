import { InfoActionTypes, IInfoState, InfoActions } from "./infoTypes";

let initState: IInfoState = {
  contact_info: {
    phone: "",
    email: "",
  },
  socials: [],
  product_delivery_terms: {
    content: "",
  },
  branches: [],
  layoutCategories: [],
};

export const infoReducer = (
  state = initState,
  action: InfoActions
): IInfoState => {
  switch (action.type) {
    case InfoActionTypes.SetSocialAndContactInfo:
      return {
        ...state,
        ...action.payload,
      };
    case InfoActionTypes.SetPorductDeliveryTerms:
      return {
        ...state,
        product_delivery_terms: action.payload,
      };
    case InfoActionTypes.SetBrnaches:
      return {
        ...state,
        branches: action.payload,
      };
    case InfoActionTypes.SetLayoutCatrogires:
      return {
        ...state,
        layoutCategories: action.payload,
      };
    default:
      return state;
  }
};
