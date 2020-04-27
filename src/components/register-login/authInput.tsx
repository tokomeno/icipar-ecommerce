import React from "react";
import classnames from "classnames";
import { useToggle } from "../../hooks/common/useToggle";

interface AuthInputProps {
  iconPath: string;
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type: string;
  errorMessage?: null | string;
}

export const AuthInput: React.FC<AuthInputProps> = ({
  iconPath,
  placeholder,
  onChange,
  value,
  type,
  children,
  errorMessage,
}) => {
  const { isActive, toggle } = useToggle(false);
  return (
    <div
      className={classnames("logForm-item d-flex", { error: !!errorMessage })}
    >
      <div className="logForm-item_icon d-flex align-items-center justify-content-center">
        <img src={iconPath} alt="" />
      </div>
      <input
        onChange={onChange}
        value={value}
        type={isActive ? "text" : type}
        placeholder={placeholder}
        className="logForm-item_input"
      />
      {type === "password" && (
        <div onClick={toggle} className="show-pass password-eye">
          <img src="/assets/images/show-pass.svg" alt="show password" />
        </div>
      )}
      {errorMessage && <span className="error-txt">{errorMessage}</span>}
      {children}
    </div>
  );
};
