import React from "react";
import classnames from "classnames";
import { useInput } from "../../hooks/common/useInput";
import Axios from "axios";
import { AuthInput } from "./authInput";

interface RegisterFormProps {
  isActive: boolean;
  showLoginForm: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
  isActive,
  showLoginForm
}) => {
  const handleSubmit = () => {
    const userData = { email, password, password2, phone };
    console.log(userData);
    Axios.get("/hay")
      .then(() => {})
      .catch(err => {
        console.log(err);
      });
  };
  const { value: email, onChange: setEmail } = useInput("");
  const { value: phone, onChange: setPhone } = useInput("");
  const { value: password, onChange: setPassword } = useInput("");
  const { value: password2, onChange: setPassword2 } = useInput("");

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
        placeholder="იმეილი"
      >
        <div className="or-reg d-flex flex-column align-items-center justify-content-between">
          <span />
          <div className="txt">ან</div>
          <span />
        </div>
      </AuthInput>
      <AuthInput
        iconPath="/assets/images/phone.svg"
        onChange={setPhone}
        value={phone}
        type="text"
        placeholder="ტელეფონი"
        errorMessage={null}
      />

      <AuthInput
        iconPath="/assets/images/form-pass.svg"
        onChange={setPassword}
        value={password}
        type="password"
        placeholder="პაროლი"
        errorMessage={null}
      />
      <AuthInput
        iconPath="/assets/images/form-pass.svg"
        onChange={setPassword2}
        value={password2}
        type="password"
        placeholder="პაროლი"
        errorMessage={null}
      />

      <div className="btn-block d-flex align-items-center justify-content-end">
        <button onClick={handleSubmit} className="btn">
          დარეგისტრირდი
        </button>
      </div>
      <div onClick={showLoginForm} className="backto-login">
        ავტორიზაცია
      </div>
    </form>
  );
};
