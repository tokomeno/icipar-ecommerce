import Axios from "axios";
import { ADDITIONAL_INFO, PRODUCT_DELIVERY_TERMS } from "../../api/endpoints";
import { Dispatch } from "redux";
import { IInfoState, InfoActionTypes } from "./infoTypes";

export interface SetSocialAndContactInfoAction {
  payload: Pick<IInfoState, "contact_info" | "socials">;
  type: InfoActionTypes.setSocialAndContactInfo;
}

export interface SetPorductDeliveryTermsAction {
  payload: IInfoState["product_delivery_terms"];
  type: InfoActionTypes.SetPorductDeliveryTerms;
}

export const fetchSocialAndContactInfo = () => {
  return (dispatch: Dispatch) => {
    Axios.get<{
      data: IInfoState["product_delivery_terms"];
    }>(PRODUCT_DELIVERY_TERMS)
      .then(res => {
        dispatch<SetPorductDeliveryTermsAction>({
          payload: res.data.data,
          type: InfoActionTypes.SetPorductDeliveryTerms
        });
      })
      .catch(err => {
        console.error(err);
      });

    Axios.get<{
      data: Pick<IInfoState, "contact_info" | "socials">;
    }>(ADDITIONAL_INFO)
      .then(res => {
        dispatch<SetSocialAndContactInfoAction>({
          payload: res.data.data,
          type: InfoActionTypes.setSocialAndContactInfo
        });
      })
      .catch(err => {
        console.error(err);
      });
  };
};
