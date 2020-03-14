import { store } from "./redux/store";

import { setCurrentUser } from "./redux/auth/authActions";

import { setGenericTokenAsHeader } from "./api/helpers";
import { fetchCart } from "./redux/cart/cartActions";
import { fetchFavorites } from "./redux/favorites/favoritesActions";

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
        user: storageAuthState.user
      })
    );
  } else {
    setGenericTokenAsHeader().then(() => {
      store.dispatch(fetchCart() as any);
      store.dispatch(fetchFavorites() as any);
    });
  }
};
