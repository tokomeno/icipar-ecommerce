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
    EmailService.subscribe()
      .then(res => {
        setSuccessMessage(t("you_have_subscribed"));
      })
      .catch(err => {
        console.error(err);
        // setErrorMessage(err.response.data);
      });
  };
  return (
    <form className="d-flex">
      <input
        {...inputHandler}
        type="email"
        placeholder={t("enter_your_email")}
      />
      {successMessage && <p className="text-success">{successMessage}</p>}
      {errorMessage && <p className="text-success">{errorMessage}</p>}
      <button onClick={handleSubmit} type="button" className="sent">
        {t("send")}
      </button>
    </form>
  );
};
