import React from "react";
import { Layout } from "../../layout";
import { useTranslation } from "react-i18next";

interface GiftCardPageProps {}

export const GiftCardPage: React.FC<GiftCardPageProps> = props => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="container">
        <form className="giftCard d-flex flex-column align-items-center justify-content-center">
          <input
            type="text"
            placeholder="ჩაწერეთ თანხა"
            className="amount text-center"
          />
          <div className="select">
            <div className="or-reg d-flex flex-column align-items-center justify-content-between">
              <span />
              <div className="txt">{t("or")}</div>
              <span />
            </div>
            <button type="button" className="select-btn online">
              {t("online_coupon")}
            </button>
            <button type="button" className="select-btn deliv">
              {t("adgilze_mitanit")}
            </button>
          </div>
          <button className="add">{t("add_to_cart")}</button>
        </form>
      </div>
    </Layout>
  );
};
