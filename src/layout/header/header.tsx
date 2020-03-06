import React, { useContext, useEffect, useCallback } from "react";
import { productCategories } from "../../data/categories";
import { Link, NavLink, useHistory } from "react-router-dom";
import {
  IActiveModalContext,
  ActiveModalContext
} from "../../contexts/modalContex";
import { ChangeLang } from "../../components/change-lang";
import { useTranslation } from "react-i18next";
import { IStoreState } from "../../redux/mainReducer";
import classnames from "classnames";
import { Search } from "./search";
import { useToggle } from "../../hooks/common/useToggle";
import { AboutPagesMenu } from "../../components/pageSideMenu";
import { CartNavbarDropdown } from "../../components/navbar-wish-cart/cartNavbarDropdown";
import { WishNavbarDropdown } from "../../components/navbar-wish-cart/wishNavbarDropdown";
import { connect } from "react-redux";

interface HeaderProps {
  user: IStoreState["auth"]["user"];
  phone: string;
}

export const _Header: React.FC<HeaderProps> = ({ user, phone }) => {
  const { t } = useTranslation();
  const history = useHistory();
  const { setActiveModal, activeModal, hideModal } = useContext<
    IActiveModalContext
  >(ActiveModalContext);

  const { isActive, toggle, setActive, setInActive } = useToggle(false);

  const handleScroll = useCallback(
    (event: any) => {
      if (window.scrollY > 80) {
        setActive();
      } else {
        setInActive();
      }
    },
    [setInActive, setActive]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [toggle, handleScroll]);

  return (
    <React.Fragment>
      <div
        className={classnames("bg__site", {
          active:
            activeModal === "search-modal" ||
            activeModal === "burger-menu" ||
            activeModal === "filter"
        })}
        onClick={hideModal}
      ></div>
      <header className={classnames("site__header", { active: isActive })}>
        <div className="header d-flex flex-md-column flex-column-reverse">
          <div className="header-sale text-center">
            <p className="header-sale_txt d-none d-md-block">
              გამოიწერეთ სიახლეები და მიიღეთ 15%-იანი ფასდაკლება
            </p>
            <p className="header-sale_txt d-block d-md-none">
              40%-იანი ფასდაკლება მხოლოდ შენთვის
            </p>
          </div>

          <div className="sup-hdr d-none d-md-block">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-lg-9 col-md-8">
                  <ul className="d-none d-lg-flex">
                    <li>
                      <a href={"tel:" + phone} className="sup-hdr_link">
                        <img src="/assets/images/phone.svg" alt="call" />
                        {phone}
                      </a>
                    </li>
                    <li className="store">
                      <Link to="/shops" className="sup-hdr_link">
                        <img src="/assets/images/marker.svg" alt="map marker" />
                        {t("shops")}
                      </Link>
                    </li>

                    {AboutPagesMenu.map(menu => (
                      <li key={menu.to}>
                        <Link to={menu.to} className="sup-hdr_link">
                          {t(menu.title)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div
                    onClick={() => setActiveModal("burger-menu")}
                    className="burger-btn d-lg-none d-block"
                  >
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 text-right">
                  {user ? (
                    <NavLink to="/profile" className="sup-hdr_link login-user">
                      <img src={user.avatar} alt="user" />
                      {user.name}
                    </NavLink>
                  ) : (
                    <a
                      onClick={() => setActiveModal("login-register")}
                      href="#!"
                      className="sup-hdr_link"
                    >
                      <img src="/assets/images/user.svg" alt="user" />
                      {t("register")}/{t("login")}
                    </a>
                  )}

                  <ChangeLang />
                </div>
              </div>
            </div>
          </div>
          <div className="sub-hdr d-none d-md-block">
            <div className="container">
              <div className="row align-items-center">
                <Link to="/" className="logo col-md-3">
                  <img src="/assets/images/logo.svg" alt="logo" />
                </Link>
                <Search />
                <div className="col-md-2 d-flex align-items-center justify-content-end">
                  <CartNavbarDropdown />
                  <WishNavbarDropdown />
                </div>
              </div>
            </div>
          </div>
          <div className="container d-none d-lg-block">
            <div className="header-menu d-flex justify-content-between">
              {productCategories.map(item => (
                <HeaderMenuItem key={item.id} title={item.title} />
              ))}
              <div className="header-menu_item">
                <Link to="/gift-card" className="link">
                  {t("gift_cart")}
                </Link>
              </div>

              <div className="header-menu_item">
                <Link to="/all-brands" className="link">
                  {t("brands")}
                </Link>
              </div>
              <div className="header-menu_item">
                <Link to="/catalog" className="link">
                  {t("catalog")}
                </Link>
              </div>
            </div>
          </div>
          <div className="container d-block d-md-none">
            <div className="xs-header d-flex align-items-center justify-content-around">
              <div className="d-flex align-items-center">
                <div
                  onClick={() => setActiveModal("burger-menu")}
                  className="burger-btn d-lg-none d-block"
                >
                  <span />
                  <span />
                  <span />
                </div>
                <Link to="/" className="logo-xs">
                  <img src="/assets/images/logo.svg" alt="logo" />
                </Link>
              </div>
              <div className="d-flex">
                <div
                  onClick={() => setActiveModal("search-modal")}
                  className="xs-hdr_btn btn-search"
                >
                  <i className="fas fa-search" />
                </div>
                <div
                  onClick={() => history.push("/profile/cart")}
                  className="xs-hdr_btn btn-cart active"
                >
                  <div className="ball" />
                  <img src="/assets/images/bag-dark.svg" alt="cart" />
                </div>
                <div
                  className="xs-hdr_btn btn-user"
                  onClick={() => {
                    if (user) {
                      history.push("/profile");
                    } else {
                      setActiveModal("login-register");
                    }
                  }}
                >
                  <img src="/assets/images/user.svg" alt="user" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

const mapStateToProps = ({ info }: IStoreState) => {
  return {
    phone: info.contact_info.phone
  };
};

export const Header = connect(mapStateToProps)(_Header);

type HeaderMenuItemProps = {
  title: string;
};
const HeaderMenuItem: React.FC<HeaderMenuItemProps> = ({ title }) => {
  return (
    <div className="header-menu_item">
      <a href="#!" className="link">
        {title}
      </a>
      {/* <div className="inner-menu">
        <div className="container">
          <div className="d-flex">
            <div className="inner-menu_block categories">
              <div className="title">კატეგორიები</div>
              <div className="items">
                <a href="#!" className="items-link">
                  მამაკაცი
                </a>
                <a href="#!" className="items-link">
                  ქალი
                </a>
                <a href="#!" className="items-link">
                  სიახლე
                </a>
              </div>
            </div>
            <div className="inner-menu_block categories">
              <div className="title">ბრენდები</div>
              <div className="items">
                <div className="letter">A</div>
                <a href="#!" className="letter-link">
                  Aguilera
                </a>
                <a href="#!" className="letter-link">
                  Armani
                </a>
                <a href="#!" className="letter-link">
                  Antonio Banderas
                </a>
                <a href="#!" className="letter-link">
                  Arno Sorel
                </a>
                <a href="#!" className="letter-link">
                  Avene
                </a>
                <div className="letter">B</div>
                <a href="#!" className="letter-link">
                  Barbara Gould
                </a>
                <a href="#!" className="letter-link">
                  Beneton
                </a>
                <a href="#!" className="letter-link">
                  Bruno Banani
                </a>
                <a href="#!" className="letter-link">
                  Burberry
                </a>
                <a href="#!" className="letter-link">
                  Bvlgari
                </a>
                <div className="letter">C</div>
                <a href="#!" className="letter-link">
                  Chanel
                </a>
                <a href="#!" className="letter-link">
                  Calvin Klein
                </a>
                <a href="#!" className="letter-link">
                  Chanel
                </a>
                <a href="#!" className="letter-link">
                  Calvin Klein
                </a>
                <div className="letter">A</div>
                <a href="#!" className="letter-link">
                  Aguilera
                </a>
                <a href="#!" className="letter-link">
                  Armani
                </a>
                <a href="#!" className="letter-link">
                  Antonio Banderas
                </a>
                <a href="#!" className="letter-link">
                  Arno Sorel
                </a>
                <a href="#!" className="letter-link">
                  Avene
                </a>
              </div>
            </div>
            <div className="suggestion left">
              <div className="title">დღის შეთავაზება</div>
              <a href="#!" className="d-flex align-items-center flex-column">
                <div className="image">
                  <img
                    src="/assets/uploads/images/suggestion1.png"
                    alt="suggestion"
                  />
                </div>
                <div className="prod-name">Calvin Klein All, 100ml</div>
                <div className="price d-flex">
                  <div className="old-price">
                    <span>110</span>
                    <sub>D</sub>
                  </div>
                  <div className="new-price">
                    110
                    <sub>D</sub>
                  </div>
                </div>
              </a>
            </div>
            <div className="suggestion">
              <div className="title">ბლოგ ბოსტი</div>
              <a href="#!" className="d-flex align-items-center flex-column">
                <div className="image">
                  <img
                    src="/assets/uploads/images/suggestion2.png"
                    alt="suggestion"
                  />
                </div>
                <div className="prod-name">სუნამოს შერჩევის ხელოვნება</div>
              </a>
            </div>
          </div>
        </div>
      </div>
     */}
    </div>
  );
};
