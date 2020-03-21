import React from "react";
import { ProfileBasePage } from "../index";
import { useTranslation } from "react-i18next";
import { useGiftCards } from "../../../hooks/useGiftCards";
import { CouponsTable } from "../../../components/coupons-table";
import { ProfileSpinner } from "../../../components/spinners/profile-spiner";
import classnames from "classnames";

interface GiftCardProfilePageProps {}

export const GiftCardProfilePage: React.FC<GiftCardProfilePageProps> = props => {
  const { t } = useTranslation();
  const { discountGiftCard, giftCard } = useGiftCards();
  if (!discountGiftCard || !giftCard) return <ProfileSpinner />;

  return (
    <ProfileBasePage>
      <div className="profile-right profile-side couples-table">
        <div className="profile-top">
          <h1 className="profile-top_title">{t("gift_card")}</h1>
          <CouponsTable
            head={
              <tr>
                <th>{t("code")}</th>
                <th className="text-center">{t("darchenilia")}</th>
              </tr>
            }
            body={
              <>
                {giftCard.map(c => (
                  <tr
                    key={c.code}
                    className={classnames("coupons-tr", {
                      used: c.status !== "active"
                    })}
                  >
                    <td>
                      <div className="code">{c.code}</div>
                    </td>

                    <td className="text-center">
                      <div className="sale-num">{c.amount_left}</div>
                    </td>
                  </tr>
                ))}
              </>
            }
          />
          <h1 className="profile-top_title">{t("discount_gift_card")}</h1>
          <CouponsTable
            head={
              <tr>
                <th>{t("date")}</th>
                <th>{t("discount_rate_earned")}</th>
                <th className="text-right">{t("total_amount_spent")}</th>
              </tr>
            }
            body={
              <>
                {discountGiftCard.map((c, index) => (
                  <tr
                    key={index}
                    className={classnames("coupons-tr", {
                      used: c.status !== "active"
                    })}
                  >
                    <td>
                      <div className="code">{c.date}</div>
                    </td>

                    <td className="text-center">
                      <div className="sale-num">{c.discount_rate_earned}</div>
                    </td>
                    <td className="text-center">
                      <div className="sale-num">{c.total_amount_spent}</div>
                    </td>
                  </tr>
                ))}
              </>
            }
          />
        </div>
      </div>
    </ProfileBasePage>
  );
};
