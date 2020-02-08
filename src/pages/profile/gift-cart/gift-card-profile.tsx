import React from "react";
import { ProfileBasePage } from "../index";
import { useTranslation } from "react-i18next";
import { useGiftCards } from "../../../hooks/useGiftCards";
import { CouponsTable } from "../../../components/coupons-table";

interface GiftCardProfilePageProps {}

export const GiftCardProfilePage: React.FC<GiftCardProfilePageProps> = props => {
  const { t } = useTranslation();
  const { discountGiftCard, giftCard } = useGiftCards();
  return (
    <ProfileBasePage>
      <div className="profile-right profile-side couples-table">
        <div className="profile-top">
          <h1 className="profile-top_title">{t("gift_card")}</h1>
          <CouponsTable
            items={giftCard.map(c => ({
              isActive: c.status === "active",
              code: c.code,
              sale: c.amount_left,
              valid_for: "",
              validity_date: ""
            }))}
          />
          <h1 className="profile-top_title">{t("discount_gift_card")}</h1>
          <CouponsTable
            items={discountGiftCard.map(c => ({
              isActive: true,
              code: "",
              sale: c.discount_rate_earned,
              valid_for: "",
              validity_date: c.date
            }))}
          />
        </div>
      </div>
    </ProfileBasePage>
  );
};
