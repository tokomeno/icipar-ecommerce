import React from "react";
import { ICartItem } from "../../../data/product";
import {
  removeItem,
  increaseItem,
  decreaseItem
} from "../../../redux/cart/cartActions";
import { useTranslation } from "react-i18next";
import { ICartState } from "../../../redux/cart/cartTypes";
import classnames from "classnames";

export type CartItemProps = {
  cartItem: ICartItem;
  removeItem: typeof removeItem;
  increaseItem: typeof increaseItem;
  decreaseItem: typeof decreaseItem;
  loadingItemId: ICartState["loadingItemId"];
};
export const CartItem: React.FC<CartItemProps> = ({
  cartItem,
  removeItem,
  increaseItem,
  decreaseItem,
  loadingItemId
}) => {
  const { t } = useTranslation();

  return (
    <tr>
      <td className="first-td">
        <a href="#!" className="d-flex align-items-center">
          <div className="image d-flex align-items-center justify-content-center">
            <img src={cartItem.thumbnail} alt="cart" />
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
          <span
            className={classnames("plus", {
              "opacity-03": loadingItemId === cartItem.item_id
            })}
            onClick={() =>
              loadingItemId !== cartItem.item_id &&
              increaseItem(cartItem.item_id)
            }
          >
            <i className="fas fa-chevron-up" />
          </span>
          <span className="qty">
            <input type="number" readOnly value={cartItem.items_count} />
          </span>
          <span
            className={classnames("min", {
              "opacity-03": loadingItemId === cartItem.item_id
            })}
            onClick={() =>
              loadingItemId !== cartItem.item_id &&
              decreaseItem(cartItem.item_id)
            }
          >
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
      <td className="price-td text-right">
        <div className="price-block">
          <div className="price sum">
            {cartItem.price * cartItem.items_count}
            <sub>D</sub>
          </div>
        </div>
      </td>
    </tr>
  );
};
