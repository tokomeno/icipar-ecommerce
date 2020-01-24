import React, { useState, useContext } from "react";
import { Modal } from "react-bootstrap";
import { RegisterForm } from "./registerForm";
import { LoginForm } from "./loginForm";
import {
  ActiveModalContext,
  IActiveModalContext
} from "../../contexts/modalContex";

interface RegisterLoginProps {}

export const RegisterLogin: React.FC<RegisterLoginProps> = () => {
  const { hideModal, activeModal } = useContext<IActiveModalContext>(
    ActiveModalContext
  );
  return (
    <Modal
      size="lg"
      className="login"
      centered
      show={activeModal === "login-register"}
      onHide={hideModal}
    >
      {/* <Modal.Body> */}
      <ModalContent hideModal={hideModal} />
      {/* </Modal.Body> */}
    </Modal>
  );
};

const ModalContent: React.FC<{ hideModal: () => void }> = ({ hideModal }) => {
  const [activeForm, setActiveForm] = useState<"login" | "register">("login");
  const showLoginForm = () => setActiveForm("login");
  const showRegisterForm = () => setActiveForm("register");
  return (
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
            showRegisterForm={showRegisterForm}
          />
          <RegisterForm
            isActive={activeForm === "register"}
            showLoginForm={showLoginForm}
          />
        </div>
        <div className="col-lg-6 login_content d-none d-md-block">
          <div className="bg"></div>
        </div>
      </div>
    </React.Fragment>
  );
};
