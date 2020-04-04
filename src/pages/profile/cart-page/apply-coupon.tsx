import React from "react";
import { setCart } from "../../../redux/cart/cartActions";
import { ICartState } from "../../../redux/cart/cartTypes";
import { useTranslation } from "react-i18next";
import { CartService } from "../../../services/cart.http";
import { useInput } from "../../../hooks/common/useInput";

export const ApplyCoupon: React.FC<{
  setCart: typeof setCart;
  promotion_display_text: ICartState["promotion_display_text"];
  promotion_code: ICartState["promotion_code"];
}> = ({ setCart, promotion_display_text, promotion_code }) => {
  const { t } = useTranslation();
  const promotionInput = useInput();

  const applyPromotion = () => {
    CartService.applyPromotion(promotionInput.value).then((res) => {
      promotionInput.onChange("");
      setCart(res.data.data);
    });
  };
  const cancelPromotion = () => {
    CartService.cancelPromotion().then((res) => {
      setCart(res.data.data);
    });
  };

  return (
    <form className="copy-code d-flex align-items-start flex-wrap">
      <div>
        <input
          {...promotionInput}
          type="text"
          placeholder={t("paste_coupon_or_sale_code")}
        />
        {promotion_display_text && (
          <span style={{ color: "black" }} className="position-relative">
            {promotion_display_text}

            {promotion_code && (
              <button
                type="button"
                onClick={cancelPromotion}
                style={{ color: "#fa7268" }}
                className="btn btn-md btn-link ml-5"
              >
                &times;
              </button>
            )}
          </span>
        )}
      </div>
      <button
        className="buy-btn"
        style={{ marginLeft: "4px" }}
        type="button"
        onClick={applyPromotion}
      >
        {t("send")}
      </button>
    </form>
  );
};
