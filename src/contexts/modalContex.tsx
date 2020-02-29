import React, { createContext, useState } from "react";

export type IActiveModalContext = {
  activeModal:
    | "login-register"
    | "search-modal"
    | "burger-menu"
    | "filter"
    | "choose-rate-product"
    | "rate-product"
    | null;
  setActiveModal: (n: IActiveModalContext["activeModal"]) => void;
  hideModal: () => void;
};
export const ActiveModalContext = createContext<IActiveModalContext>(
  {} as IActiveModalContext
);

export const ActiveModalProvider: React.FC<{}> = ({ children }) => {
  const [state, setState] = useState<{
    activeModal: IActiveModalContext["activeModal"];
  }>({
    activeModal: null
  });

  const hideModal = () => {
    document.body.style.overflowY = "initial";
    document.body.style.overflowX = "initial";
    setState({ ...state, activeModal: null });
  };

  const setActiveModal: IActiveModalContext["setActiveModal"] = name => {
    if (name === "search-modal" || name === "burger-menu") {
      document.body.style.overflowY = "hidden";
      document.body.style.overflowX = "hidden";
    }
    setState({ ...state, activeModal: name });
  };

  return (
    <ActiveModalContext.Provider
      value={{ setActiveModal, activeModal: state.activeModal, hideModal }}
    >
      {children}
    </ActiveModalContext.Provider>
  );
};
