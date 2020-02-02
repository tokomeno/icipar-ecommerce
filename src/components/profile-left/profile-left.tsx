import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { logoutUser } from "../../redux/auth/authActions";
import { IUser } from "../../redux/auth/authTypes";
import classnames from "classnames";

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
      <div className="user-image">
        <img src={user.avatar} alt="user" />
      </div>
      <NavItem to={"/profile"} title={"ჩემი გვერდი"}>
        <img src="/assets/images/user-g.svg" alt="user" />
        <img src="/assets/images/user-red.svg" alt="user" className="active" />
      </NavItem>

      <div className="profile-menu">
        <NavItem to={"/profile/cart"} title={t("cart")}>
          <img src="/assets/images/bag-g.svg" alt="cart" />
          <img src="/assets/images/bag-r.svg" alt="cart" className="active" />
          <div className="ntfc" />
        </NavItem>

        <NavItem to={"/profile/orders"} title={"შეკვეთები"}>
          <img src="/assets/images/order-g.svg" alt="cart" />
          <img src="/assets/images/order-r.svg" alt="cart" className="active" />
        </NavItem>

        <NavItem to={"/profile/wishlist"} title={t("wishes")}>
          <img src="/assets/images/heart-g.svg" alt="cart" />
          <img src="/assets/images/heart-r.svg" alt="cart" className="active" />
          <div className="ntfc" />
        </NavItem>

        <NavItem to={"/profile/coupons"} title={"კუპონები"}>
          <img src="/assets/images/price-g.svg" alt="cart" />
          <img src="/assets/images/price-r.svg" alt="cart" className="active" />
        </NavItem>

        <NavItem to={"/profile"} title={"ბარათები"}>
          <img src="/assets/images/card-g.svg" alt="cart" />
          <img src="/assets/images/card-4.svg" alt="cart" className="active" />
        </NavItem>
      </div>
      <div className="profile-menu">
        <NavItem to={"/profile/coupons"} title={"ინფორმაცია"}>
          <img src="/assets/images/i-g.svg" alt="info" />
          <img src="/assets/images/i-r.svg" alt="info" className="active" />
        </NavItem>

        <NavItem to={"/profile/address"} title={"მისამართები"}>
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
