import React from "react";
import { useTranslation } from "react-i18next";
import { useToggle } from "../hooks/common/useToggle";

export const CouponModal = () => {
  const { setActive: setHide, isActive: isHidden } = useToggle(false);
  const { t } = useTranslation();
  if (isHidden) return null;
  return (
    <div className="checkout-saleBAnner d-none d-lg-block">
      <button
        onClick={setHide}
        className="close-sale d-flex align-items-center justify-content-center"
      >
        <i className="fas fa-times" />
      </button>
      <img src="/assets/images/sale-banner.png" alt="" />
      <div className="bg text-center">
        <div className="title">{t("get_10_percantage_sael")}</div>
        <div className="txt">{t("fill_profile_completely")}</div>
        <a onClick={setHide} href="#!" className="link">
          {t("kargi")}
        </a>
      </div>
    </div>
  );
};
