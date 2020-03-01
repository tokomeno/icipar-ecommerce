import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MenuDropdown } from "./menu-dropdown";
import { connect } from "react-redux";
import { IStoreState } from "../../redux/mainReducer";
import { ICartItem } from "../../redux/cart/cartTypes";

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
    <MenuDropdown
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
