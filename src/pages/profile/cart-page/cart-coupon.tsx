import React from "react";
import { removeGiftCart } from "../../../redux/cart/cartActions";
import { useTranslation } from "react-i18next";

export type CartItemProps = {
  removeGiftCart: typeof removeGiftCart;
  amount: number;
};

export const CartCoupon: React.FC<CartItemProps> = ({
  removeGiftCart,
  amount
}) => {
  const { t } = useTranslation();

  return (
    <tr>
      <td className="first-td">
        <a href="#!" className="d-flex align-items-center">
          <div className="image d-flex align-items-center justify-content-center">
            {/* <img src={cartItem.thumbnail} alt="cart" /> */}
          </div>
          <div>
            <div className="name">{t("gift_cart")}</div>
            <div className="profbtns d-flex">
              <button onClick={() => removeGiftCart()} className="profbtns_btn">
                {t("delete")}
              </button>
            </div>
          </div>
        </a>
      </td>
      <td></td>
      <td className="price-td hidden-price">
        {/* <div className="price-block">
          <div className="price text-right">
            {amount}

            <sub>D</sub>
          </div>
        </div> */}
      </td>
      <td className="price-td text-right">
        <div className="price-block">
          <div className="price sum">
            {amount}
            <sub>D</sub>
          </div>
        </div>
      </td>
    </tr>
  );
};
