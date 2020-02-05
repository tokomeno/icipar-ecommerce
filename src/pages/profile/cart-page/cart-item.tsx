import React from "react";
import classnames from "classnames";
import { ICartItem } from "../../../data/product";
import { changeQnty, removeItem } from "../../../redux/cart/cartActions";
import { useTranslation } from "react-i18next";
import { useCounter } from "../../../hooks/common/useCounter";

export type CartItemProps = {
  cartItem: ICartItem;
  changeQntyById: typeof changeQnty;
  removeItem: typeof removeItem;
};
export const CartItem: React.FC<CartItemProps> = ({ cartItem, removeItem }) => {
  const { t } = useTranslation();
  const { counter, increase, decrease } = useCounter(cartItem.items_count, 1);

  return (
    <tr>
      <td className="first-td">
        <a href="#!" className="d-flex align-items-center">
          <div className="image d-flex align-items-center justify-content-center">
            <img src="/assets/uploads/images/cart-product@2x.png" alt="cart" />
          </div>
          <div>
            <div className="name">{cartItem.item_title}</div>
            <div className="profbtns d-flex">
              <button
                onClick={() => removeItem(cartItem.item_id)}
                className="profbtns_btn"
              >
                {t("delete")}
              </button>
              <button className="profbtns_btn d-none d-md-block">
                {t("mogvianebit_sheviden")}
              </button>
              <button className="heart profbtns_btn">
                <img src="/assets/images/heart-border.svg" alt="favorite" />
                <img
                  src="/assets/images/loved.svg"
                  alt="favorite"
                  className="added"
                />
              </button>
            </div>
          </div>
        </a>
      </td>
      <td>
        <div className="quantity d-flex flex-column align-items-center">
          <span className="plus">
            <i className="fas fa-chevron-up" />
          </span>
          <span className="qty">
            <input type="number" min={1} defaultValue={1} />
          </span>
          <span className="min">
            <i className="fas fa-chevron-down" />
          </span>
        </div>
      </td>
      <td className="price-td hidden-price">
        <div className="price-block">
          <div className="price text-right">
            {cartItem.price}
            <sub>D</sub>
          </div>
        </div>
      </td>
      {/* <td className="price-td text-right">
        <div className="price-block">
          <div className="price sum">
            110
            <sub>D</sub>
          </div>
        </div>
      </td> */}
    </tr>
  );
};
