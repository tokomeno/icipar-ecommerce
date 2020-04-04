import React from "react";
import { connect } from "react-redux";
import { IStoreState } from "../../../redux/mainReducer";
import {
  changeQnty,
  removeItem,
  decreaseItem,
  increaseItem,
  removeGiftCart,
  setBundleQntyToCart,
  setCart,
} from "../../../redux/cart/cartActions";
import { CartItem } from "./cart-item";
import { useTranslation } from "react-i18next";
import { ICartState, ICartItem } from "../../../redux/cart/cartTypes";
import { CartCoupon } from "./cart-coupon";
import { CartBundel } from "./cart-bundel";
import { ApplyCoupon } from "./apply-coupon";

interface CartContentProps {
  setCart: typeof setCart;
  cartItems: ICartItem[];
  totalPrice: number;
  goToCheckout: () => void;
  removeItem: typeof removeItem;
  increaseItem: typeof increaseItem;
  decreaseItem: typeof decreaseItem;
  loadingItemId: ICartState["loadingItemId"];
  new_gift_cards: ICartState["new_gift_cards"];
  bundles: ICartState["bundles"];
  removeGiftCart: typeof removeGiftCart;
  setBundleQntyToCart: typeof setBundleQntyToCart;
  promotion_display_text: ICartState["promotion_display_text"];
  promotion_code: ICartState["promotion_code"];
}

export const _CartContent: React.FC<CartContentProps> = ({
  cartItems,
  totalPrice,
  increaseItem,
  decreaseItem,
  removeItem,
  goToCheckout,
  loadingItemId,
  new_gift_cards,
  removeGiftCart,
  bundles,
  setBundleQntyToCart,
  setCart,
  promotion_display_text,
  promotion_code,
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
                <th className="text-right">{t("amount_payble")}</th>
                <th className="text-right">{t("price")}</th>
                <th className="text-right">{t("sum")}</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((cartItem) => (
                <CartItem
                  loadingItemId={loadingItemId}
                  removeItem={removeItem}
                  increaseItem={increaseItem}
                  decreaseItem={decreaseItem}
                  key={cartItem.item_id}
                  cartItem={cartItem}
                />
              ))}
              {new_gift_cards.map((giftcard) => (
                <CartCoupon
                  key={giftcard.card_type}
                  removeGiftCart={removeGiftCart}
                  giftCard={giftcard}
                />
              ))}
              {bundles.map((bundle) => (
                <CartBundel
                  setBundleQntyToCart={setBundleQntyToCart}
                  bundle={bundle}
                />
              ))}
            </tbody>
          </table>
        </div>

        <div className="shopping-bottom d-flex flex-column flex-md-row align-items-start justify-content-sm-between justify-content-center">
          <ApplyCoupon
            promotion_display_text={promotion_display_text}
            setCart={setCart}
            promotion_code={promotion_code}
          />
          <div className="next flex-shrink-0 d-flex align-items-center">
            <div className="last-price d-none d-sm-block">
              {totalPrice}
              <sub>D</sub>
            </div>
            <a
              style={{ padding: "10px 19px" }}
              href="#!"
              onClick={goToCheckout}
              className="buy-btn"
            >
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
  return {
    cartItems: cart.items,
    totalPrice: cart.totalPrice,
    loadingItemId: cart.loadingItemId,
    new_gift_cards: cart.new_gift_cards,
    bundles: cart.bundles,
    promotion_display_text: cart.promotion_display_text,
    promotion_code: cart.promotion_code,
  };
};

export const CartContent = connect(mapStateToProps, {
  changeQntyById: changeQnty,
  removeItem,
  increaseItem,
  decreaseItem,
  removeGiftCart,
  setBundleQntyToCart,
  setCart,
})(_CartContent);
