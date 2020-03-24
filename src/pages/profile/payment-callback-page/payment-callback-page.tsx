import { ProfileBasePage } from "..";

import React from "react";

import { useRouteMatch } from "react-router-dom";
import { routes } from "../../../routes/routes";
import { useTranslation } from "react-i18next";

interface PaymentCallbackPageProps {}

export const PaymentCallbackPage: React.FC<{}> = () => {
  const { t } = useTranslation();
  const route = useRouteMatch();
  console.log(route);
  return (
    <ProfileBasePage>
      <div
        className="profile-right profile-side table-profile"
        style={{ minHeight: "100px" }}
      >
        <p className={"text-center"}>
          {route.path === routes.paymentFail && t("payment_fail")}
          {route.path === routes.paymentSuccess && t("payment_success")}
        </p>
      </div>
    </ProfileBasePage>
  );
};
