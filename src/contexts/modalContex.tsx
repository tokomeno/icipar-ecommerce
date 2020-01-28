import React, { createContext, useState } from "react";

export type IActiveModalContext = {
  activeModal: "login-register" | "search-modal" | null;
  setActiveModal: (n: IActiveModalContext["activeModal"]) => void;
  hideModal: () => void;
};
export const ActiveModalContext = createContext<IActiveModalContext>({
  activeModal: null,
  setActiveModal: () => {},
  hideModal: () => {}
});

export const ActiveModalProvider: React.FC<{}> = ({ children }) => {
  const [state, setState] = useState<{
    activeModal: IActiveModalContext["activeModal"];
  }>({
    activeModal: null
  });

  const hideModal = () => setState({ ...state, activeModal: null });
  const setActiveModal: IActiveModalContext["setActiveModal"] = name => {
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
