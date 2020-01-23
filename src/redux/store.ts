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

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
