import React from "react";
import { ProfileBasePage } from "../index";
import { useTranslation } from "react-i18next";
import { useCoupons } from "../../../hooks/useCoupons";
import { CouponsTable } from "../../../components/coupons-table";
import { ProfileSpinner } from "../../../components/spinners/profile-spiner";

interface CouponsPageProps {}

export const CouponsPage: React.FC<CouponsPageProps> = props => {
  const { amountCoupons, discountCoupons } = useCoupons();
  const { t } = useTranslation();

  if (!amountCoupons || !discountCoupons) return <ProfileSpinner />;

  return (
    <ProfileBasePage>
      <div className="profile-right profile-side couples-table">
        <div className="profile-top">
          <h1 className="profile-top_title">{t("ammount_coupons")}</h1>
          <CouponsTable
            items={amountCoupons.map(c => ({
              isActive: c.status === "active",
              code: c.code,
              sale: c.amount_left,
              valid_for: c.valid_for,
              validity_date: c.validity_date
            }))}
          />
          <hr />
          <h1 className="profile-top_title">{t("discount_coupons")}</h1>
          <CouponsTable
            items={discountCoupons.map(c => ({
              isActive: c.status === "active",
              code: c.code,
              sale: c.rate,
              valid_for: c.valid_for,
              validity_date: c.validity_date
            }))}
          />
        </div>
      </div>
    </ProfileBasePage>
  );
};
