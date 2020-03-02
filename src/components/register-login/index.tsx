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

interface RegisterLoginProps {
  setAuthErrors: typeof setAuthErrors;
}

const _RegisterLogin: React.FC<RegisterLoginProps> = ({ setAuthErrors }) => {
  const { hideModal, activeModal } = useContext<IActiveModalContext>(
    ActiveModalContext
  );
  const [activeForm, setActiveForm] = useState<"login" | "register">("login");
  const showForm = (form: "login" | "register") => {
    setAuthErrors(null);
    setActiveForm(form);
  };

  return (
    <Modal
      size="lg"
      className="login"
      centered
      show={activeModal === "login-register"}
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
              isActive={activeForm === "login"}
              showRegisterForm={() => showForm("register")}
              hideModal={hideModal}
            />
            <RegisterForm
              isActive={activeForm === "register"}
              showLoginForm={() => showForm("login")}
              hideModal={hideModal}
            />
          </div>
          <div className="col-lg-6 login_content d-none d-md-block">
            <div className="bg"></div>
          </div>
        </div>
      </React.Fragment>
    </Modal>
  );
};

export const RegisterLogin = connect(null, { setAuthErrors })(_RegisterLogin);
