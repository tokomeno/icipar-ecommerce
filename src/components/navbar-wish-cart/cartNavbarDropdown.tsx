import React from "react";
import { NavLink } from "react-router-dom";
import { ICartItem } from "../../data/product";
import { useTranslation } from "react-i18next";
import { MenuCartAndWishDropdown } from "./menuCartAndWishDropdown";
import { connect } from "react-redux";
import { IStoreState } from "../../redux/mainReducer";

interface CardNavbarDropdownProps {
  totalPrice: number;
  cartItems: ICartItem[];
}

const _CartNavbarDropdown: React.FC<CardNavbarDropdownProps> = ({
  cartItems,
  totalPrice
}) => {
  const { t } = useTranslation();
  return (
    <MenuCartAndWishDropdown
      buttonChildren={
        <>
          <img src="/assets/images/bag.svg" alt="cart" />
          <div className="d-none d-lg-block">
            <div className="price">
              {totalPrice}
              <sub>D</sub>
            </div>
            <div className="title">{t("cart")}</div>
          </div>
        </>
      }
      navLink={
        <NavLink
          to="/profile/cart"
          className="d-flex justify-content-between cart-btn"
          rel="noopener noreferrer"
        >
          {t("cart")}
          <img src="/assets/images/arrow-right.svg" alt="right arrow" />
        </NavLink>
      }
      products={cartItems}
    />
  );
};

const mapStateToProps = ({ cart }: IStoreState) => ({
  cartItems: cart.items,
  totalPrice: cart.totalPrice
});

export const CartNavbarDropdown = connect(mapStateToProps)(_CartNavbarDropdown);
