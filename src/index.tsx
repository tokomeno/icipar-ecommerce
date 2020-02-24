import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import { App } from "./App";
import "swiper/swiper.scss";
import { store } from "./redux/store";
import { PorductFilterProvider } from "./contexts/productFilterContext";
import { ActiveModalProvider } from "./contexts/modalContex";

import "react-image-lightbox/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Provider store={store}>
    <PorductFilterProvider>
      <ActiveModalProvider>
        <App />
      </ActiveModalProvider>
    </PorductFilterProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
