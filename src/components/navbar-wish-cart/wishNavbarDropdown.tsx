import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MenuDropdown } from "./menu-dropdown";
import { connect } from "react-redux";
import { IStoreState } from "../../redux/mainReducer";
import { ICartItem } from "../../redux/cart/cartTypes";

interface WishNavbarDropdownProps {
  totalPrice: number;
  cartItems: ICartItem[];
}

const _WishNavbarDropdown: React.FC<WishNavbarDropdownProps> = ({
  cartItems,
  totalPrice
}) => {
  const { t } = useTranslation();
  return (
    <MenuDropdown
      wrapperClassName="hdr-fav"
      buttonChildren={<img src="/assets/images/heart.svg" alt="favorite" />}
      navLink={
        <NavLink
          to="/profile/wishes"
          className="d-flex justify-content-between cart-btn"
          rel="noopener noreferrer"
        >
          {t("wishes")}
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

export const WishNavbarDropdown = connect(mapStateToProps)(_WishNavbarDropdown);
