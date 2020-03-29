import React, { useContext, useState, useEffect } from "react";
import { Modal } from "react-bootstrap";

import {
  ActiveModalContext,
  IActiveModalContext
} from "../../contexts/modalContex";
import { connect } from "react-redux";
import { setAuthErrors } from "../../redux/auth/authActions";
import { IStoreState } from "../../redux/mainReducer";
import { useTranslation } from "react-i18next";
import { axiosWithToken } from "../../api/axios-with-token";
import { WEBSITE_TERMS } from "../../api/endpoints";
import { BounceLoader } from "react-spinners";

interface TermModalProps {
  setAuthErrors: typeof setAuthErrors;
  user: IStoreState["auth"]["user"];
}

const _TermModal: React.FC<TermModalProps> = ({ setAuthErrors }) => {
  const { hideModal, activeModal, setActiveModal } = useContext<
    IActiveModalContext
  >(ActiveModalContext);
  const { t } = useTranslation();
  const [terms, setTerms] = useState<string | null>(null);
  useEffect(() => {
    axiosWithToken
      .get<{ data: { content: string } }>(WEBSITE_TERMS)
      .then(res => setTerms(res.data.data.content));
  }, []);

  return (
    <Modal
      size="lg"
      className="rules"
      centered
      show={activeModal === "terms-modal"}
      onHide={hideModal}
    >
      <React.Fragment>
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
          onClick={hideModal}
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
        <div className="title text-center">საიტის წესები</div>
        <div className="rules-title">გთხოვთ გაეცნოთ წესებს</div>
        <div className="rules-block">
          <div className="txt-block">
            {terms ? (
              <p
                className="txt"
                dangerouslySetInnerHTML={{
                  __html: terms
                }}
              />
            ) : (
              <BounceLoader size={40} color={"#fa7268"} loading={true} />
            )}
          </div>
        </div>
        <div className="d-flex btns">
          <button
            onClick={() => setActiveModal("register-modal")}
            className="agree btn"
          >
            {t("agree")}
          </button>
          <button onClick={hideModal} className="cancel btn">
            {t("not_agree")}
          </button>
        </div>
      </React.Fragment>
    </Modal>
  );
};

const mapStateToProps = ({ auth }: IStoreState) => ({
  user: auth.user
});
export const TermModal = connect(mapStateToProps, { setAuthErrors })(
  _TermModal
);
