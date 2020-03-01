import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { addGiftCart } from "../../redux/cart/cartActions";
import { connect } from "react-redux";
import { useInput } from "../../hooks/common/useInput";
import { IStoreState } from "../../redux/mainReducer";
import classnames from "classnames";
import { ICartState } from "../../redux/cart/cartTypes";

export interface IGiftCardErrors {
  amount?: string[];
  card_type?: string[];
}
interface GiftCardPageProps {
  addGiftCart: typeof addGiftCart;
  gift_cart_error: IStoreState["cart"]["errors"]["new_gift_cards"];
}

const _GiftCardPage: React.FC<GiftCardPageProps> = ({ addGiftCart }) => {
  const { t } = useTranslation();
  const { onChange, value: amount } = useInput();
  const [cartType, setCartType] = useState<
    ICartState["new_gift_cards"][number]["card_type"]
  >("DIGITAL");

  const [errorMessage, setErrorMessage] = useState<IGiftCardErrors>({});
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = () => {
    setErrorMessage({});
    addGiftCart(
      { amount: parseInt(amount), card_type: cartType as string },

      () => {
        setSuccessMessage(t("gift_card_added_in_cart"));
      },
      errorMessage => {
        setErrorMessage(errorMessage);
      }
    );
  };
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
        {successMessage && <p className="text-success">{successMessage}</p>}
        {errorMessage.amount && (
          <p className="text-danger">{errorMessage.amount}</p>
        )}
        <div className="select">
          <div className="or-reg d-flex flex-column align-items-center justify-content-between">
            <span />
            <div className="txt">{t("or")}</div>
            <span />
          </div>
          <button
            type="button"
            className={classnames("select-btn online", {
              active: "DIGITAL" === cartType
            })}
            onClick={() => setCartType("DIGITAL")}
          >
            {t("online_coupon")}
          </button>
          <button
            type="button"
            className={classnames("select-btn deliv", {
              active: "PHYSICAL" === cartType
            })}
            onClick={() => setCartType("PHYSICAL")}
          >
            {t("adgilze_mitanit")}
          </button>
          {errorMessage.card_type && (
            <p className="text-danger">{errorMessage.card_type}</p>
          )}
        </div>
        <button type="button" onClick={handleSubmit} className="add">
          {t("add_to_cart")}
        </button>
      </form>
    </div>
  );
};

export const GiftCardPage = connect(null, { addGiftCart })(_GiftCardPage);
