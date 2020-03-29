import React from "react";
import classnames from "classnames";
import { useInput } from "../../hooks/common/useInput";
import { AuthInput } from "./authInput";
import { connect } from "react-redux";
import { registerUser } from "../../redux/auth/authActions";
import { IStoreState } from "../../redux/mainReducer";
import { AuthState, IUser } from "../../redux/auth/authTypes";
import { useTranslation } from "react-i18next";
import { useCaptcha } from "../../hooks/useCaptcha";
import { ReCaptcha } from "react-recaptcha-v3";
import { RECAPTCHA_SITE_KEY } from "../../consts/services";

interface RegisterFormProps {
  showLoginForm: () => void;
  isActive: boolean;
  errors: AuthState["errors"];
  registerUser: typeof registerUser;

  onRegister: (user: IUser | null) => void;
}

const _RegisterForm: React.FC<RegisterFormProps> = ({
  isActive,
  showLoginForm,
  errors,
  registerUser,
  onRegister
}) => {
  const { t } = useTranslation();
  const myCaptcha = useCaptcha();

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    registerUser({
      userData: {
        email,
        password,
        password_confirmation,
        phone,
        recaptcha_token: myCaptcha.recaptcha_token
      },
      callback: onRegister
    });
    myCaptcha.captchaRef.current.execute();
  };

  const { value: email, onChange: setEmail } = useInput("");
  const { value: phone, onChange: setPhone } = useInput("");
  const { value: password, onChange: setPassword } = useInput("");
  const { value: password_confirmation, onChange: setC_Password } = useInput(
    ""
  );

  const register = (
    <form
      className={classnames(
        "logForm reg-wrapper d-flex flex-column align-items-center justify-content-center",
        { active: isActive }
      )}
    >
      {errors && errors["g-recaptcha-response"] && (
        <p className="text-danger">{errors["g-recaptcha-response"][0]}</p>
      )}
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
      <ReCaptcha
        sitekey={RECAPTCHA_SITE_KEY}
        action="register"
        verifyCallback={token => {
          myCaptcha.setRecaptchaToken(token);
        }}
        ref={myCaptcha.captchaRef}
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

  return register;
};

const mapStateToProps = ({ auth }: IStoreState) => {
  return { errors: auth.errors };
};

export const RegisterForm = connect(mapStateToProps, { registerUser })(
  _RegisterForm
);
