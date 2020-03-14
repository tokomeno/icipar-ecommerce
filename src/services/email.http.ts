import { SUBSCRIBE_EMAIL, SAVE_CONTACT } from "../api/endpoints";
import Axios from "axios";

export class EmailService {
  static subscribe(email: string) {
    return Axios.post(SUBSCRIBE_EMAIL, { email });
  }

  static saveContact(requestData: {
    email: string;
    message: string;
    phone: string;
    name: string;
    recaptcha_token: string;
  }) {
    console.log(requestData);
    return Axios.post(SAVE_CONTACT, {
      ...requestData,
      "g-recaptcha-response": requestData.recaptcha_token
    });
  }
}
