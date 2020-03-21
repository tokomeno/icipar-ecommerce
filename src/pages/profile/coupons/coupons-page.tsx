import React from "react";
import { ProfileBasePage } from "../index";
import { useTranslation } from "react-i18next";
import { useCoupons } from "../../../hooks/useCoupons";
import { CouponsTable } from "../../../components/coupons-table";
import { ProfileSpinner } from "../../../components/spinners/profile-spiner";
import classnames from "classnames";

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
            head={
              <tr>
                <th>{t("code")}</th>
                <th>{t("fasdakleba_vrceldeba")}</th>
                <th className="text-center">{t("sale")}</th>
                <th className="text-right">{t("darchenilia")}</th>
              </tr>
            }
            body={
              <>
                {amountCoupons.map(c => (
                  <tr
                    key={c.code}
                    className={classnames("coupons-tr", {
                      used: c.status !== "active"
                    })}
                  >
                    <td>
                      <div className="code">{c.code}</div>
                    </td>
                    <td>
                      <div className="sale-item code">{c.valid_for}</div>
                    </td>
                    <td className="text-center">
                      <div className="sale-num">{c.amount_left}</div>
                    </td>
                    <td className="text-right">
                      <div
                        className={classnames("days", {
                          "used-txt": c.status !== "active"
                        })}
                      >
                        {c.status !== "active" ? c.validity_date : t("used")}
                      </div>
                    </td>
                  </tr>
                ))}
              </>
            }
          />
          <hr />
          <h1 className="profile-top_title">{t("discount_coupons")}</h1>
          <CouponsTable
            head={
              <tr>
                <th>{t("code")}</th>
                <th className="text-right">{t("validity_for")}</th>
                <th>{t("rate")}</th>
                <th>{t("amount_spent")}</th>
                <th>{t("days_left")}</th>
                <th className="text-right">{t("validity_date")}</th>
              </tr>
            }
            body={
              <>
                {discountCoupons.map(c => (
                  <tr
                    key={c.code}
                    className={classnames("coupons-tr", {
                      used: c.status !== "active"
                    })}
                  >
                    <td>
                      <div className="code">{c.code}</div>
                    </td>
                    <td>
                      <div className="sale-item code">{c.valid_for}</div>
                    </td>
                    <td className="text-center">
                      <div className="sale-num">{c.rate}</div>
                    </td>
                    <td className="text-center">
                      <div className="sale-num">{c.amount_spent}</div>
                    </td>

                    <td className="text-right">
                      {" "}
                      <div className="sale-num">{c.validity_date}</div>
                    </td>

                    <td className="text-right">
                      <div
                        className={classnames("days", {
                          "used-txt": c.status !== "active"
                        })}
                      >
                        {c.status === "active" ? c.days_left : t("used")}
                      </div>
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
