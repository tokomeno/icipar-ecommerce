import React from "react";
import { useTranslation } from "react-i18next";
import classnames from "classnames";

interface CouponsTableProps {
  items: {
    isActive: boolean;
    code: string;
    sale: string | number;
    valid_for: string;
    validity_date: string;
  }[];
}
export const CouponsTable: React.FC<CouponsTableProps> = ({ items }) => {
  const { t } = useTranslation();
  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>{t("code")}</th>
            <th>{t("fasdakleba_vrceldeba")}</th>
            <th className="text-center">{t("sale")}</th>
            <th className="text-right">{t("darchenilia")}</th>
          </tr>
        </thead>
        <tbody>
          {items.map(c => (
            <tr
              key={c.code}
              className={classnames("coupons-tr", {
                used: c.isActive
              })}
            >
              <td>
                <div className="code">{c.code}</div>
              </td>
              <td>
                <div className="sale-item code">{c.valid_for}</div>
              </td>
              <td className="text-center">
                <div className="sale-num">{c.sale}</div>
              </td>
              <td className="text-right">
                <div
                  className={classnames("days", {
                    "used-txt": c.isActive
                  })}
                >
                  {c.isActive ? c.validity_date : t("used")}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
