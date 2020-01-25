import { createStore, compose, applyMiddleware } from "redux";

import { reducers } from "./mainReducer";

import thunk from "redux-thunk";

// const composeEnhancers =
//   (window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] as typeof compose) || compose;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const _store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

_store.subscribe(() => {
  const state = _store.getState();

  window.localStorage.setItem("auth", JSON.stringify(state.auth));
});

export const store = _store;
