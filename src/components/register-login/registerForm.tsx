import React from "react";
import classnames from "classnames";
import { useInput } from "../../hooks/common/useInput";
import { AuthInput } from "./authInput";
import { connect } from "react-redux";
import { registerUser } from "../../redux/auth/authActions";
import { StoreState } from "../../redux/mainReducer";
import { AuthState } from "../../redux/auth/authTypes";
import { useTranslation } from "react-i18next";

interface RegisterFormProps {
  showLoginForm: () => void;
  isActive: boolean;
  errors: AuthState["errors"];
  registerUser: typeof registerUser;
  hideModal: () => void;
}

const _RegisterForm: React.FC<RegisterFormProps> = ({
  isActive,
  showLoginForm,
  errors,
  registerUser,
  hideModal
}) => {
  const { t } = useTranslation();
  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const userData = {
      email,
      password,
      password_confirmation,
      phone
    };
    registerUser({ userData, hideModal });
  };

  const { value: email, onChange: setEmail } = useInput("");
  const { value: phone, onChange: setPhone } = useInput("");
  const { value: password, onChange: setPassword } = useInput("");
  const { value: password_confirmation, onChange: setC_Password } = useInput(
    ""
  );

  return (
    <form
      className={classnames(
        "logForm reg-wrapper d-flex flex-column align-items-center justify-content-center",
        { active: isActive }
      )}
    >
      <AuthInput
        iconPath="/assets/images/form-user.svg"
        onChange={setEmail}
        value={email}
        type="email"
        placeholder={t("email")}
        errorMessage={errors && errors.email && errors.email[0]}
      >
        <div className="or-reg d-flex flex-column align-items-center justify-content-between">
          <span />
          <div className="txt">{t("or")}</div>
          <span />
        </div>
      </AuthInput>
      <AuthInput
        iconPath="/assets/images/phone.svg"
        onChange={setPhone}
        value={phone}
        type="text"
        placeholder={t("phone")}
        errorMessage={errors && errors.phone && errors.phone[0]}
      />

      <AuthInput
        iconPath="/assets/images/form-pass.svg"
        onChange={setPassword}
        value={password}
        type="password"
        placeholder={t("password")}
        errorMessage={errors && errors.password && errors.password[0]}
      />
      <AuthInput
        iconPath="/assets/images/form-pass.svg"
        onChange={setC_Password}
        value={password_confirmation}
        type="password"
        placeholder={t("password")}
        errorMessage={
          errors &&
          errors.password_confirmation &&
          errors.password_confirmation[0]
        }
      />

      <div className="btn-block d-flex align-items-center justify-content-end">
        <button onClick={handleSubmit} className="btn">
          {t("register")}
        </button>
      </div>
      <div onClick={showLoginForm} className="backto-login">
        {t("authorization")}
      </div>
    </form>
  );
};

const mapStateToProps = ({ auth }: StoreState) => {
  return { errors: auth.errors };
};

export const RegisterForm = connect(mapStateToProps, { registerUser })(
  _RegisterForm
);
