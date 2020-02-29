import { SUBSCRIBE_EMAIL } from "../api/endpoints";
import Axios from "axios";

export class EmailService {
  static subscribe(email: string) {
    return Axios.post(SUBSCRIBE_EMAIL, { email });
  }
}
