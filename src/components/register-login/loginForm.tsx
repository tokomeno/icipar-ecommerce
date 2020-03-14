import React from "react";
import classnames from "classnames";
import { AuthInput } from "./authInput";
import { useInput } from "../../hooks/common/useInput";
import { useToggle } from "../../hooks/common/useToggle";
import { FbLoginBtn } from "./fbLoginBtn.js";
import { GoogleLoginBtn } from "./GoogleLoginButton.js";
import { useTranslation } from "react-i18next";
import { loginUser } from "../../redux/auth/authActions";
import { IStoreState } from "../../redux/mainReducer";
import { connect } from "react-redux";
import { ReCaptcha } from "react-recaptcha-v3";
import { RECAPTCHA_SITE_KEY } from "../../consts/services";
import { useCaptcha } from "../../hooks/useCaptcha";

interface LoginFormProps {
  isActive: boolean;
  showRegisterForm: () => void;
  hideModal: () => void;
  errors: IStoreState["auth"]["errors"];
  loginUser: typeof loginUser;
}
const _LoginForm: React.FC<LoginFormProps> = ({
  isActive,
  showRegisterForm,
  hideModal,
  errors,
  loginUser
}) => {
  const { t } = useTranslation();
  const myCaptcha = useCaptcha();

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const userData = {
      username: email,
      password,
      isRemeber,
      recaptcha_token: myCaptcha.recaptcha_token
    };
    loginUser({ userData, hideModal });
    myCaptcha.captchaRef.current.execute();
  };
  const { value: email, onChange: setEmail } = useInput("");
  const { value: password, onChange: setPassword } = useInput("");
  const { isActive: isRemeber, toggle: toggleRemember } = useToggle(false);

  return (
    <form
      className={classnames(
        "logForm login-wrapper d-flex flex-column align-items-center justify-content-center",
        { active: isActive }
      )}
    >
      <AuthInput
        iconPath="/assets/images/form-user.svg"
        onChange={setEmail}
        value={email}
        type="email"
        placeholder="იმეილი"
        errorMessage={
          errors && ((errors.email && errors.email[0]) || t(errors.msg))
        }
      ></AuthInput>

      <AuthInput
        iconPath="/assets/images/form-pass.svg"
        onChange={setPassword}
        value={password}
        type="password"
        placeholder="პაროლი"
        errorMessage={errors && errors.password && errors.password[0]}
      />

      <ReCaptcha
        sitekey={RECAPTCHA_SITE_KEY}
        action="loginForm"
        verifyCallback={token => {
          myCaptcha.setRecaptchaToken(token);
        }}
        ref={myCaptcha.captchaRef}
      />

      <div className="btn-block d-flex align-items-center justify-content-between">
        <label className="remember">
          <input
            type="checkbox"
            className="hide"
            checked={isRemeber}
            onChange={toggleRemember}
          />
          <span className="checkmark" />
          {t("remember")}
        </label>
        <button onClick={handleSubmit} className="btn">
          {t("login")}
        </button>
      </div>
      <a onClick={showRegisterForm} href="#!" className="registration-btn">
        {t("register")}
      </a>
      <div className="or d-flex align-items-center justify-content-between">
        <span />
        {t("or")}
        <span />
      </div>
      <FbLoginBtn />
      <GoogleLoginBtn />
      <a href="#!" className="pass-forgot">
        {t("frogot_password")}?
      </a>
    </form>
  );
};

const mapStateToProps = ({ auth }: IStoreState) => {
  return { errors: auth.errors };
};

export const LoginForm = connect(mapStateToProps, { loginUser })(_LoginForm);
