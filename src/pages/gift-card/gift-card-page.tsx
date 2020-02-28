import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { addGiftCart } from "../../redux/cart/cartActions";
import { connect } from "react-redux";
import { useInput } from "../../hooks/common/useInput";
import { IStoreState } from "../../redux/mainReducer";

interface GiftCardPageProps {
  addGiftCart: typeof addGiftCart;
  gift_cart_error: IStoreState["cart"]["errors"]["new_gift_cards"];
}

const _GiftCardPage: React.FC<GiftCardPageProps> = ({
  addGiftCart,
  gift_cart_error
}) => {
  const { t } = useTranslation();
  const { onChange, value: amount } = useInput();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = () => {
    if (!amount) return setErrorMessage(t("amount_filed_is_reqiured"));
    setErrorMessage(null);
    addGiftCart(
      parseInt(amount),
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
        {gift_cart_error && <p className="text-danger">{gift_cart_error}</p>}
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
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
        <button type="button" onClick={handleSubmit} className="add">
          {t("add_to_cart")}
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ cart }: IStoreState) => {
  return {
    gift_cart_error: cart.errors.new_gift_cards
  };
};

export const GiftCardPage = connect(mapStateToProps, { addGiftCart })(
  _GiftCardPage
);
