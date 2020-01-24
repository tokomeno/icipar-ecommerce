import React from "react";
import classnames from "classnames";
import { useInput } from "../../hooks/common/useInput";
import { AuthInput } from "./authInput";
import { connect } from "react-redux";
import { loginUser } from "../../redux/auth/authActions";
import { StoreState } from "../../redux/mainReducer";
import { AuthState } from "../../redux/auth/authTypes";

interface RegisterFormProps {
  showLoginForm: () => void;
  isActive: boolean;
  errors: AuthState["errors"];
  loginUser: typeof loginUser;
}

const _RegisterForm: React.FC<RegisterFormProps> = ({
  isActive,
  showLoginForm,
  errors
}) => {
  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const userData = { email, password, c_password, phone };
    loginUser(userData);
  };

  const { value: email, onChange: setEmail } = useInput("");
  const { value: phone, onChange: setPhone } = useInput("");
  const { value: password, onChange: setPassword } = useInput("");
  const { value: c_password, onChange: setC_Password } = useInput("");

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
        errorMessage={errors && errors.email && errors.email[0]}
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
        errorMessage={errors && errors.phone && errors.phone[0]}
      />

      <AuthInput
        iconPath="/assets/images/form-pass.svg"
        onChange={setPassword}
        value={password}
        type="password"
        placeholder="პაროლი"
        errorMessage={errors && errors.password && errors.password[0]}
      />
      <AuthInput
        iconPath="/assets/images/form-pass.svg"
        onChange={setC_Password}
        value={c_password}
        type="password"
        placeholder="პაროლი"
        errorMessage={errors && errors.c_password && errors.c_password[0]}
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

const mapStateToProps = ({ auth }: StoreState) => {
  return { errors: auth.errors };
};

export const RegisterForm = connect(mapStateToProps, { loginUser })(
  _RegisterForm
);
