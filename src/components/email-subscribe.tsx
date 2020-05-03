import React, { useState } from "react";

import { useTranslation } from "react-i18next";

import { useInput } from "../hooks/common/useInput";

import { EmailService } from "../services/email.http";
import { connect } from "react-redux";
import { userHasSubscribedToNews } from "../redux/auth/authActions";

const _EmailSubscribe: React.FC<{
  userHasSubscribedToNews: typeof userHasSubscribedToNews;
}> = ({ userHasSubscribedToNews }) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const { t } = useTranslation();
  const inputHandler = useInput("");
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    EmailService.subscribe(inputHandler.value)
      .then((res) => {
        setErrorMessage(null);
        setSuccessMessage(t("you_have_subscribed"));
        userHasSubscribedToNews();
        setTimeout(() => {
          setSuccessMessage(null);
        }, 2000);
      })
      .catch((err) => {
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

export const EmailSubscribe = connect(null, { userHasSubscribedToNews })(
  _EmailSubscribe
);
