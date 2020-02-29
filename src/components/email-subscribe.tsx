import React, { useState } from "react";

import { useTranslation } from "react-i18next";

import { useInput } from "../hooks/common/useInput";

import { EmailService } from "../services/email.http";

export const EmailSubscribe: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const { t } = useTranslation();
  const inputHandler = useInput("");
  const handleSubmit = () => {
    EmailService.subscribe(inputHandler.value)
      .then(res => {
        setErrorMessage(null);
        setSuccessMessage(t("you_have_subscribed"));
        setTimeout(() => {
          setSuccessMessage(null);
        }, 2000);
      })
      .catch(err => {
        if (Array.isArray(err.response.data.email)) {
          setErrorMessage(err.response.data.email.join(" "));
        }
      });
  };
  return (
    <div>
      <form className="d-flex">
        <input
          {...inputHandler}
          type="email"
          placeholder={t("enter_your_email")}
        />

        <button onClick={handleSubmit} type="button" className="sent">
          {t("send")}
        </button>
      </form>
      <div className="pl-5">
        {successMessage && <p className="text-success">{successMessage}</p>}
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
      </div>
    </div>
  );
};
