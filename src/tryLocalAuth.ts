import { store } from "./redux/store";

import { setCurrentUser, logoutUser } from "./redux/auth/authActions";

import { setGenericTokenAsHeader } from "./api/inital-auth";
import { fetchCart } from "./redux/cart/cartActions";
import { AuthService } from "./services/auth.http";

export const tryLocalAuth = () => {
  const authStateFromStorage = localStorage.getItem("auth");
  let storageAuthState: any;

  if (authStateFromStorage) {
    storageAuthState = JSON.parse(authStateFromStorage);
  }

  if (
    typeof storageAuthState === "object" &&
    storageAuthState.token &&
    storageAuthState.user
  ) {
    store.dispatch(
      setCurrentUser({
        token: storageAuthState.token,
        user: storageAuthState.user,
      })
    );
    ifUserTokenIsNotValidLogout(storageAuthState.token);
  } else {
    setGenericTokenAsHeader().then(() => {
      store.dispatch(fetchCart() as any);
    });
  }
};

const ifUserTokenIsNotValidLogout = (token: string) => {
  AuthService.checkUserToken(token).catch((err) => {
    store.dispatch(logoutUser());
  });
};
