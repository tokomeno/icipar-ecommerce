import React from "react";
import { useTranslation } from "react-i18next";
import { addGiftCart } from "../../redux/cart/cartActions";
import { connect } from "react-redux";
import { useInput } from "../../hooks/common/useInput";

interface GiftCardPageProps {
  addGiftCart: typeof addGiftCart;
}

const _GiftCardPage: React.FC<GiftCardPageProps> = ({ addGiftCart }) => {
  const { t } = useTranslation();
  const { onChange, value: amount } = useInput();

  return (
    <div className="container">
      <form className="giftCard d-flex flex-column align-items-center justify-content-center">
        <input
          type="number"
          placeholder={t("type_amount")}
          className="amount text-center"
          value={amount}
          onChange={onChange}
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
        <button
          onClick={e => {
            e.preventDefault();
            addGiftCart(parseInt(amount));
          }}
          className="add"
        >
          {t("add_to_cart")}
        </button>
      </form>
    </div>
  );
};

export const GiftCardPage = connect(null, { addGiftCart })(_GiftCardPage);
