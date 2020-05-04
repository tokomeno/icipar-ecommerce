import axios from "axios";
import { logoutUser } from "../redux/auth/authActions";
import { store } from "../redux/store";
import { setUserHasBeenBlocked } from "../redux/info/infoActions";

const axiosWithToken = axios.create();
// Add a response interceptor
axiosWithToken.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error && error.response && error.response.status === 403) {
      setUserBlockedStatus(
        error.response && error.response.data
          ? error.response.data.error
          : "You Have Been Blocked"
      );
    }
    return Promise.reject(error);
  }
);

export { axiosWithToken };

export const setUserBlockedStatus = (text: string) => {
  try {
    window.scrollTo(0, 0);
    store.dispatch(logoutUser() as any);
    store.dispatch(setUserHasBeenBlocked(text));
    // Create the event
    // Dispatch/Trigger/Fire the event
    let event = new CustomEvent("hide-context-modal", {});
    document.dispatchEvent(event);
    setTimeout(() => {
      store.dispatch(setUserHasBeenBlocked(false));
    }, 30000);
  } catch (e) {
    console.error(e);
  }
};
