import React from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import { IStoreState } from "../../../redux/mainReducer";
import { changeQnty, removeItem } from "../../../redux/cart/cartActions";
import { CartItem } from "./cart-item";
import { useTranslation } from "react-i18next";
import { ICartItem } from "../../../data/product";

interface CartContentProps {
  cartItems: ICartItem[];
  totalPrice: number;
  changeQntyById: typeof changeQnty;
  removeItem: typeof removeItem;
  showCheckout: () => void;
}

export const _CartContent: React.FC<CartContentProps> = ({
  cartItems,
  totalPrice,
  changeQntyById,
  removeItem,
  showCheckout
}) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="checkout-top d-md-none d-flex align-items-center justify-content-center">
        <div className="top_cart show active">{t("my_cart")}</div>
        <span>/</span>
        <div className="top_buy">{t("shedena")}</div>
      </div>
      <div className="profile-right profile-side table-profile checkout-first">
        <div className="profile-top d-none d-md-block">
          <h1 className="profile-top_title">{t("my_cart")}</h1>
        </div>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>{t("products")}</th>
                <th className="text-right">{t("quantity")}</th>
                <th className="text-right">{t("price")}</th>
                <th className="text-right">{t("sum")}</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(cartItem => (
                <CartItem
                  removeItem={removeItem}
                  changeQntyById={changeQntyById}
                  key={cartItem.item_id}
                  cartItem={cartItem}
                />
              ))}
            </tbody>
          </table>
        </div>

        <div className="shopping-bottom d-flex flex-column flex-md-row align-items-center justify-content-sm-between justify-content-center">
          <form className="copy-code d-flex align-items-center">
            <input
              type="text"
              placeholder="ჩააკოპირე კუპონის ან ფასდაკლების კოდი…"
            />
            <span>-15%</span>
          </form>
          <div className="next d-flex align-items-center">
            <div className="last-price d-none d-sm-block">
              {totalPrice}
              <sub>D</sub>
            </div>
            <a href="#!" onClick={showCheckout} className="buy-btn">
              {t("shedena")}
              <img src="/assets/images/arrow-right.svg" alt="arrow" />
              <img
                src="/assets/images/arrow-right_r.svg"
                alt="arrow"
                className="red-arrow"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ cart }: IStoreState) => {
  return { cartItems: cart.items, totalPrice: cart.totalPrice };
};

export const CartContent = connect(mapStateToProps, {
  changeQntyById: changeQnty,
  removeItem
})(_CartContent);
