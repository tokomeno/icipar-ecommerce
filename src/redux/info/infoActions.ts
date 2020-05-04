import Axios from "axios";
import { ADDITIONAL_INFO, PRODUCT_DELIVERY_TERMS } from "../../api/endpoints";
import { Dispatch } from "redux";
import { IInfoState, InfoActionTypes } from "./infoTypes";
import { BranchService, IBranch } from "../../services/branch.http";
import { LayoutService, IMenuCatrogy } from "../../services/layout.http";

export interface SetBrnachesAction {
  payload: IBranch[];
  type: InfoActionTypes.SetBrnaches;
}
export interface SetLayoutCatrogiresAction {
  payload: IMenuCatrogy[];
  type: InfoActionTypes.SetLayoutCatrogires;
}

export interface SetSocialAndContactInfoAction {
  payload: Pick<IInfoState, "contact_info" | "socials">;
  type: InfoActionTypes.SetSocialAndContactInfo;
}

export interface SetPorductDeliveryTermsAction {
  payload: IInfoState["product_delivery_terms"];
  type: InfoActionTypes.SetPorductDeliveryTerms;
}

export interface SetUserHasBeenBlockedAction {
  type: InfoActionTypes.SetUserHasBeenBlocked;
  payload: false | string;
}

export const setUserHasBeenBlocked = (
  isBlocked: false | string
): SetUserHasBeenBlockedAction => {
  return {
    payload: isBlocked,
    type: InfoActionTypes.SetUserHasBeenBlocked,
  };
};

export const setLayoutCatogriesAction = () => {
  return (dispatch: Dispatch) => {
    LayoutService.productCategories()
      .then((res) => {
        dispatch<SetLayoutCatrogiresAction>({
          type: InfoActionTypes.SetLayoutCatrogires,
          payload: res.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetch_Social_ContactInfo_Branches = () => {
  return (dispatch: Dispatch) => {
    Axios.get<{
      data: IInfoState["product_delivery_terms"];
    }>(PRODUCT_DELIVERY_TERMS)
      .then((res) => {
        dispatch<SetPorductDeliveryTermsAction>({
          payload: res.data.data,
          type: InfoActionTypes.SetPorductDeliveryTerms,
        });
      })
      .catch((err) => {
        console.error(err);
      });

    Axios.get<{
      data: Pick<IInfoState, "contact_info" | "socials">;
    }>(ADDITIONAL_INFO)
      .then((res) => {
        dispatch<SetSocialAndContactInfoAction>({
          payload: res.data.data,
          type: InfoActionTypes.SetSocialAndContactInfo,
        });
      })
      .catch((err) => {
        console.error(err);
      });

    BranchService.getAll()
      .then((res) => {
        dispatch<SetBrnachesAction>({
          payload: res.data.data,
          type: InfoActionTypes.SetBrnaches,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
};
