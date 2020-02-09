import React from "react";
import { useToggle } from "../hooks/common/useToggle";

interface ProfileInputProps {
  type?: "text" | "password" | "number" | "date";
  name: string;
  label: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
}

export const ProfileInput: React.FC<ProfileInputProps> = React.memo(
  ({ label, name, type = "text", value, onChange, errorMessage }) => {
    const { isActive, toggle } = useToggle(false);
    return (
      <div className="d-flex flex-column info-item">
        <label htmlFor={name}>{label}</label>
        <input
          onChange={onChange}
          type={isActive ? "text" : type}
          name={name}
          id={name}
          value={value}
          className={type === "password" ? "pass-input password-eye-input" : ""}
          // autoComplete="off"
          autoComplete="new-password"
        />
        {type === "password" && (
          <span onClick={toggle} className="show-pass password-eye">
            <img src="/assets/images/show-pass.svg" alt="show password" />
          </span>
        )}
        {errorMessage && (
          <span className="text-danger pl-5">{errorMessage}</span>
        )}
      </div>
    );
  }
);
