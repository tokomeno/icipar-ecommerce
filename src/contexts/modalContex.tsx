import React, { createContext, useState, useCallback, useEffect } from "react";

export type IActiveModalContext = {
  activeModal:
    | "register-modal"
    | "login-modal"
    | "terms-modal"
    | "search-modal"
    | "burger-menu"
    | "filter"
    | "choose-rate-product"
    | "rate-product"
    | "order-complaint"
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
    activeModal: null,
  });

  const hideModal = useCallback(() => {
    document.body.style.overflowY = "initial";
    document.body.style.overflowX = "initial";
    setState((prev) => ({ ...prev, activeModal: null }));
  }, [setState]);

  const setActiveModal: IActiveModalContext["setActiveModal"] = useCallback(
    (name) => {
      if (name === "search-modal" || name === "burger-menu") {
        document.body.style.overflowY = "hidden";
        document.body.style.overflowX = "hidden";
      }
      setState((prevState) => ({ ...prevState, activeModal: name }));
    },
    [setState]
  );

  useEffect(() => {
    document.addEventListener("hide-context-modal", function (e) {
      hideModal();
    });
  }, [hideModal]);

  return (
    <ActiveModalContext.Provider
      value={{ setActiveModal, activeModal: state.activeModal, hideModal }}
    >
      {children}
    </ActiveModalContext.Provider>
  );
};
