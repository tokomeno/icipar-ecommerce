import React from "react";
import { setCart } from "../../../redux/cart/cartActions";
import { ICartState } from "../../../redux/cart/cartTypes";
import { useTranslation } from "react-i18next";
import { CartService } from "../../../services/cart.http";
import { useInput } from "../../../hooks/common/useInput";

export const ApplyCoupon: React.FC<{
  setCart: typeof setCart;
  promotion_display_text: ICartState["promotion_display_text"];
}> = ({ setCart, promotion_display_text }) => {
  const { t } = useTranslation();
  const applyCoupon = () => {
    CartService.applyPromotion(promotionInput.value).then(res => {
      setCart(res.data.data);
    });
  };
  const promotionInput = useInput();

  return (
    <form className="copy-code d-flex align-items-start">
      <div>
        <input
          {...promotionInput}
          type="text"
          placeholder={t("paste_coupon_or_sale_code")}
        />
        <span>{promotion_display_text}</span>
      </div>
      <button
        className="buy-btn"
        style={{ marginLeft: "4px" }}
        type="button"
        onClick={applyCoupon}
      >
        {t("send")}
      </button>
    </form>
  );
};
