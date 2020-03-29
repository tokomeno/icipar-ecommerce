import React, { useState, useEffect } from "react";
import { ProfileBasePage } from "../profile";
import { useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";
import { AuthService } from "../../services/auth.http";
import { ProfileSpinner } from "../../components/spinners/profile-spiner";
import { useTranslation } from "react-i18next";

interface ConfirmEmailPageProps {}

export const ConfirmEmailPage: React.FC<ConfirmEmailPageProps> = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { push } = useHistory();
  const { hash, user_id } = queryString.parse(location.search);

  const [successMessage, setSuccess] = useState<string | null>(null);
  const [failMessage, setFailMessage] = useState<string | null>(null);
  useEffect(() => {
    if (typeof hash !== "string" || typeof user_id !== "string") {
      push("/");
      return;
    }
    AuthService.confirmEmail(user_id, hash)
      .then(() => {
        setSuccess(t("email_confirmed_successfully"));
      })
      .catch(err => {
        if (typeof err.response.data === "string") {
          setFailMessage(err.response.data);
        } else {
          console.log(err.response.data);
          setFailMessage("try again");
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hash, user_id]);

  if (!(successMessage || failMessage)) {
    return <ProfileSpinner />;
  }
  return (
    <ProfileBasePage>
      <div
        className="profile-right profile-side table-profile"
        style={{ minHeight: "100px" }}
      >
        {successMessage && (
          <p className={"text-center text-success"}>{successMessage}</p>
        )}
        {failMessage && (
          <p className={"text-danger text-success"}>{failMessage}</p>
        )}
      </div>
    </ProfileBasePage>
  );
};
