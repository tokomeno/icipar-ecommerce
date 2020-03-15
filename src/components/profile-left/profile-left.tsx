import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { logoutUser } from "../../redux/auth/authActions";
import { IUser } from "../../redux/auth/authTypes";
import classnames from "classnames";
import { routes } from "../../routes/routes";
import { Avatar } from "./avatar";

interface ProfileLeftProps {
  logout: typeof logoutUser;
  user: IUser;
}

export const ProfileLeft: React.FC<ProfileLeftProps> = ({ user, logout }) => {
  const { t } = useTranslation();
  const history = useHistory();
  const location = useLocation();

  return (
    <div
      className={classnames("profile-left profile-side d-lg-block", {
        "d-none": location.pathname !== "/profile"
      })}
    >
      <div className="username text-center d-lg-none d-block">
        {t("hello")} <span>{user.name}</span>
      </div>
      <Avatar user={user} />
      <NavItem to={"/profile"} title={t("my_page")}>
        <img src="/assets/images/user-g.svg" alt="user" />
        <img src="/assets/images/user-red.svg" alt="user" className="active" />
      </NavItem>

      <div className="profile-menu">
        <NavItem to={"/profile/cart"} title={t("cart")}>
          <img src="/assets/images/bag-g.svg" alt="bag" />
          <img src="/assets/images/bag-r.svg" alt="bag" className="active" />
          <div className="ntfc" />
        </NavItem>

        <NavItem to={routes.orders} title={t("orders")}>
          <img src="/assets/images/order-g.svg" alt="order" />
          <img
            src="/assets/images/order-r.svg"
            alt="order"
            className="active"
          />
        </NavItem>

        <NavItem to={routes.favorites} title={t("wishes")}>
          <img src="/assets/images/heart-g.svg" alt="heart" />
          <img
            src="/assets/images/heart-r.svg"
            alt="heart"
            className="active"
          />
          <div className="ntfc" />
        </NavItem>

        <NavItem to={"/profile/coupons"} title={t("coupons")}>
          <img src="/assets/images/price-g.svg" alt="price" />
          <img
            src="/assets/images/price-r.svg"
            alt="price"
            className="active"
          />
        </NavItem>

        <NavItem to={"/profile/gift-cards"} title={t("cards")}>
          <img src="/assets/images/card-g.svg" alt="card" />
          <img src="/assets/images/card-4.svg" alt="card" className="active" />
        </NavItem>
      </div>
      <div className="profile-menu">
        <NavItem to={"/profile/info"} title={t("inforamtion")}>
          <img src="/assets/images/i-g.svg" alt="info" />
          <img src="/assets/images/i-r.svg" alt="info" className="active" />
        </NavItem>

        <NavItem to={"/profile/address"} title={t("addresses")}>
          <img src="/assets/images/loc-g.svg" alt="locations" />
          <img
            src="/assets/images/loc-r.svg"
            alt="locations"
            className="active"
          />
        </NavItem>
      </div>
      <div className="profile-menu">
        <a
          href="#!"
          onClick={() => {
            logout();
            history.push("/");
          }}
          className="mypage-link logout d-flex"
        >
          <div className="image-b d-flex align-items-center justify-content-center">
            <img src="/assets/images/logout.svg" alt="info" />
          </div>
          <div className="title">{t("logout")}</div>
        </a>
      </div>
    </div>
  );
};

type NavItemProps = {
  title: string;
  to: string;
};
const NavItem: React.FC<NavItemProps> = ({ title, children, to }) => {
  return (
    <NavLink
      exact
      to={to}
      activeClassName="active"
      className="mypage-link d-flex"
    >
      <div className="image-b d-flex align-items-center justify-content-center">
        {children}
      </div>
      <div className="title">{title}</div>
    </NavLink>
  );
};
