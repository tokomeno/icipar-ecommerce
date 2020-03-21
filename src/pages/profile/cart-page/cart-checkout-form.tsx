import React from "react";
import { useTranslation } from "react-i18next";
import { OrderService } from "../../../services/order.http";

interface CartCheckoutForm {
  totalPrice: number;
  showContent: () => void;
}
export const CartCheckoutForm: React.FC<CartCheckoutForm> = ({
  totalPrice,
  showContent
}) => {
  const { t } = useTranslation();
  const handleSubmit = () => {
    OrderService.complete();
  };
  return (
    <div className="profile-right profile-side table-profile buy-cont checkout-buy active">
      <div className="profile-top d-none d-md-block">
        <h2 className="profile-top_title d-none d-sm-block">{t("shedena")}</h2>
      </div>
      <form className="info">
        <div className="d-flex flex-column info-item">
          <label>{t("city")}</label>
          <select className="custom-select">
            <option>{t("choose_city")}</option>
            {[{ id: 1, city: "qal" }].map(city => (
              <option key={city.id} value={city.id}>
                {city.city}
              </option>
            ))}
          </select>
          {/* {errors && errors.city_id && errors.city_id[0] && (
            <span className="text-danger pl-5">{errors.city_id[0]}</span>
          )} */}
        </div>
        {/* <div className="d-flex flex-column info-item">
          <label htmlFor="coupon">კუპონი</label>
          <input type="text" id="coupon" placeholder="JKR459JJ600" />
          <div className="sale">-15%</div>
        </div>
        <div className="d-flex flex-column info-item">
          <label htmlFor="gift">სასაჩუქრე ბარათი</label>
          <input type="text" id="gift" placeholder="XXXXXX" />
        </div> */}
        <div className="d-flex justify-content-xl-end justify-content-start invoice">
          <label className="invoice-txt">
            <input type="checkbox" className="hide" />
            <span className="checkmark" />
            {t("send_me_invoice_on_mail")}
          </label>
        </div>
      </form>
      <div className="mobile-shop d-block d-md-none">
        <div className="mobile-shop_item d-flex align-items-center justify-content-between">
          <div className="item1">{t("sum")}</div>
          <div className="item2">{totalPrice} GEL</div>
        </div>
        <div className="mobile-shop_item d-flex align-items-center justify-content-between">
          <div className="item1">{t("delivery")}</div>
          <div className="item2">{t("free")}</div>
        </div>
        <div className="mobile-shop_item d-flex align-items-center justify-content-between">
          <div className="itemLast">{t("gadasaxdeli")}</div>
          <div className="itemLast">{totalPrice} GEL</div>
        </div>
      </div>
      <div className="shopping-bottom d-flex align-items-center justify-content-sm-between justify-content-center">
        <a
          href="#!"
          onClick={showContent}
          className="cont-shop d-none d-sm-block"
        >
          <img src="/assets/images/arrow-xl.svg" alt="arrow" />{" "}
          {t("coniniue_shopping")}
        </a>
        <div className="next d-flex align-items-center">
          <div className="old-price d-none d-sm-block">
            {totalPrice}
            <sub>D</sub>
          </div>
          {/* <div className="last-price d-none d-sm-block">
              110
              <sub>D</sub>
            </div> */}
          <button onClick={handleSubmit} className="buy-btn">
            {t("pay")}
            <img src="/assets/images/arrow-right.svg" alt="arrow" />
            <img
              src="/assets/images/arrow-right_r.svg"
              alt="arrow"
              className="red-arrow"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
