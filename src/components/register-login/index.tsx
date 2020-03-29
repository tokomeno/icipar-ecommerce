import React, { useState, useContext } from "react";
import { Modal } from "react-bootstrap";
import { RegisterForm } from "./registerForm";
import { LoginForm } from "./loginForm";
import {
  ActiveModalContext,
  IActiveModalContext
} from "../../contexts/modalContex";
import { connect } from "react-redux";
import { setAuthErrors } from "../../redux/auth/authActions";
import { useToggle } from "../../hooks/common/useToggle";
import { AfterRegisterForm } from "./after-register-form";
import { IStoreState } from "../../redux/mainReducer";
import { TermModal } from "./terms-modal";

interface RegisterLoginProps {
  setAuthErrors: typeof setAuthErrors;
  user: IStoreState["auth"]["user"];
}

const _RegisterLogin: React.FC<RegisterLoginProps> = ({ setAuthErrors }) => {
  const { hideModal, activeModal, setActiveModal } = useContext<
    IActiveModalContext
  >(ActiveModalContext);

  const {
    isActive: isActiveAfterRegisterForm,
    setActive: setActiveAfterRegisterForm
  } = useToggle();

  return (
    <>
      <TermModal />
      <Modal
        size="lg"
        className="login"
        centered
        show={activeModal === "register-modal" || activeModal === "login-modal"}
        onHide={hideModal}
      >
        <React.Fragment>
          <button
            type="button"
            className="close"
            onClick={hideModal}
            aria-label="Close"
          >
            <img
              src="/assets/images/close.svg"
              alt="close"
              className="d-md-block d-none"
            />
            <img
              src="/assets/images/close-dark.svg"
              alt="close"
              className="d-md-none d-block"
            />
          </button>
          <div className="modal-content_block d-flex">
            <div className="col-lg-6 login_content">
              <LoginForm
                isActive={activeModal === "login-modal"}
                showRegisterForm={() => setActiveModal("terms-modal")}
                hideModal={hideModal}
              />
              <RegisterForm
                isActive={activeModal === "register-modal"}
                showLoginForm={() => setActiveModal("login-modal")}
                hideModal={hideModal}
                onRegister={setActiveAfterRegisterForm}
              />
              {isActiveAfterRegisterForm && (
                <AfterRegisterForm hideModal={hideModal} />
              )}
            </div>
            <div className="col-lg-6 login_content d-none d-md-block">
              <div className="bg"></div>
            </div>
          </div>
        </React.Fragment>
      </Modal>
    </>
  );
};

const mapStateToProps = ({ auth }: IStoreState) => ({
  user: auth.user
});
export const RegisterLogin = connect(mapStateToProps, { setAuthErrors })(
  _RegisterLogin
);
