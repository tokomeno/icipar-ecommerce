import { SUBSCRIBE_EMAIL } from "../api/endpoints";
import Axios from "axios";

export class EmailService {
  static subscribe() {
    return Axios.post(SUBSCRIBE_EMAIL);
  }
}
