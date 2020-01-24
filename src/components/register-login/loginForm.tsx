import React from "react";
import classnames from "classnames";
import { AuthInput } from "./authInput";
import { useInput } from "../../hooks/common/useInput";
import Axios from "axios";
import { useToggle } from "../../hooks/common/useToggle";

interface LoginFormProps {
  isActive: boolean;
  showRegisterForm: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  isActive,
  showRegisterForm
}) => {
  const handleSubmit = () => {
    const userData = { email, password, isRemeber };
    console.log(userData);
    Axios.get("/hay")
      .then(() => {})
      .catch(err => {
        console.log(err);
      });
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
      ></AuthInput>

      <AuthInput
        iconPath="/assets/images/form-pass.svg"
        onChange={setPassword}
        value={password}
        type="password"
        placeholder="პაროლი"
        errorMessage={null}
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
          დამახსოვრება
        </label>
        <button onClick={handleSubmit} className="btn">
          შესვლა
        </button>
      </div>
      <a onClick={showRegisterForm} href="#!" className="registration-btn">
        რეგისტრაცია
      </a>
      <div className="or d-flex align-items-center justify-content-between">
        <span />
        ან
        <span />
      </div>
      <a href="#!" className="loginBtn fb d-flex align-items-center">
        <div className="icon d-flex align-items-center justify-content-center">
          <i className="fab fa-facebook" />
        </div>
        <div className="txt text-center">ფეისბუქით ავტორიზაცია</div>
      </a>
      <a href="#!" className="loginBtn google d-flex align-items-center">
        <div className="icon d-flex align-items-center justify-content-center">
          <i className="fab fa-google" />
        </div>
        <div className="txt text-center">გუგლით ავტორიზაცია</div>
      </a>
      <a href="#!" className="pass-forgot">
        დაგავიწყდა პაროლი?
      </a>
    </form>
  );
};
