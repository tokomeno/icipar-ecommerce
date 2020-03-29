import React, { useState } from "react";
import { useInput } from "../../hooks/common/useInput";
import { AuthInput } from "./authInput";
import { connect } from "react-redux";
import { IStoreState } from "../../redux/mainReducer";
import { useTranslation } from "react-i18next";
import { AuthService } from "../../services/auth.http";
import { IUser } from "../../redux/auth/authTypes";

interface ConfirmPhoneProps {
  hideModal: () => void;
  user: IStoreState["auth"]["user"];
}

const _ConfirmPhone: React.FC<ConfirmPhoneProps> = ({ hideModal, user }) => {
  const { t } = useTranslation();
  const confirmationInput = useInput("");
  const [errors, setErrors] = useState<string | null>(null);
  if (!user) {
    console.error("user is null");
    return null;
  }

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    AuthService.confirmPhone(user.id, confirmationInput.value)
      .then(res => {
        if (res.data.error) {
          setErrors(res.data.error);
        } else {
          hideModal();
        }
      })
      .catch(err => {
        if (
          typeof err.response.data.error === "object" &&
          Array.isArray(err.response.data.error.pin)
        ) {
          setErrors(err.response.data.error.pin.join(" "));
        }
        console.error(err.response);
      });

    // hideModal()
  };

  const register = (
    <form className="logForm reg-wrapper d-flex flex-column align-items-center justify-content-center active">
      <h4 className="mb-35 h4">{t("check_phone_for_pin")}</h4>
      <AuthInput
        iconPath={`/assets/images/phone.svg`}
        {...confirmationInput}
        type="text"
        placeholder={t("confirm_phone_placeholder")}
        errorMessage={errors && errors}
      />

      <div className="btn-block d-flex align-items-center justify-content-end">
        <button onClick={handleSubmit} className="btn">
          {t("submit")}
        </button>
      </div>
    </form>
  );

  return register;
};

const mapStateToProps = ({ auth }: IStoreState) => {
  return { user: auth.user as IUser };
};

export const ConfirmPhone = connect(mapStateToProps)(_ConfirmPhone);
