import React, { useContext, useEffect, useCallback, useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import {
  IActiveModalContext,
  ActiveModalContext,
} from "../../contexts/modalContex";
import { ChangeLang } from "../../components/change-lang";
import { useTranslation } from "react-i18next";
import { IStoreState } from "../../redux/mainReducer";
import classnames from "classnames";
import { Search } from "./search";
import { useToggle } from "../../hooks/common/useToggle";
import { AboutPagesMenu } from "../../components/pageSideMenu";
import { CartNavbarDropdown } from "../../components/navbar-wish-cart/cartNavbarDropdown";
import { FavoritesNavbarDropdown } from "../../components/navbar-wish-cart/favorites-navbar-dropdown";
import { connect } from "react-redux";
import {
  LayoutService,
  IMenuCatrogy,
  IDailyOffer,
  ILatestBlogPost,
} from "../../services/layout.http";
import { HeaderMenuDropdownItem } from "./header-menu-dropdown-item";
import { routes } from "../../routes/routes";

interface HeaderProps {
  user: IStoreState["auth"]["user"];
  phone: string;
  menu: IMenuCatrogy[];
}

export const _Header: React.FC<HeaderProps> = ({ user, phone, menu }) => {
  const { t } = useTranslation();
  const history = useHistory();
  const { setActiveModal, activeModal, hideModal } = useContext<
    IActiveModalContext
  >(ActiveModalContext);
  const [dailyOffer, setDailyOffer] = useState<IDailyOffer | null>(null);
  const [latestBlogPost, setLatestBlogPost] = useState<ILatestBlogPost | null>(
    null
  );

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

  useEffect(() => {
    LayoutService.dailyOffer().then((res) => {
      setDailyOffer(res.data.data);
    });
    LayoutService.latestBlog().then((res) => {
      setLatestBlogPost(res.data.data);
    });
  }, []);

  return (
    <React.Fragment>
      <div
        className={classnames("bg__site", {
          active:
            activeModal === "search-modal" ||
            activeModal === "burger-menu" ||
            activeModal === "filter",
        })}
        onClick={hideModal}
      ></div>
      <header className={classnames("site__header", { active: isActive })}>
        <div className="header d-flex flex-md-column flex-column-reverse">
          {user && !user.is_subscribed && (
            <div className="header-sale text-center">
              <p className="header-sale_txt d-none d-md-block">
                {t("subscribe_to_the_news_and_get_header_text")}
              </p>
            </div>
          )}

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

                    {AboutPagesMenu.map((menu) => (
                      <li key={menu.to}>
                        <Link
                          to={menu.to}
                          className={classnames("sup-hdr_link", {
                            active: menu.to === routes.howItWorks,
                          })}
                        >
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
                      onClick={() => setActiveModal("login-modal")}
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
                  {user && <FavoritesNavbarDropdown />}
                </div>
              </div>
            </div>
          </div>
          <div className="container d-none d-lg-block">
            <div className="header-menu d-flex justify-content-between">
              {latestBlogPost &&
                dailyOffer &&
                menu.map((item) => (
                  <HeaderMenuDropdownItem
                    latestBlogPost={latestBlogPost}
                    dailyOffer={dailyOffer}
                    key={item.id}
                    item={item}
                  />
                ))}

              <div className="header-menu_item">
                <Link
                  to={{
                    pathname: routes.catalog,
                    search:
                      "discount_range[]=0-0.25&discount_range[]=0.25-0.5&discount_range[]=0.5-0.75&discount_range[]=0.75-1",
                    state: "refresh",
                  }}
                  className="link"
                >
                  {t("sale")}
                </Link>
              </div>
              <div className="header-menu_item">
                <Link to={routes.allBrands} className="link">
                  {t("brands")}
                </Link>
              </div>
              <div className="header-menu_item">
                <Link to={routes.giftCard} className="link">
                  {t("gift_cart")}
                </Link>
              </div>
              <div className="header-menu_item">
                <Link to="/catalog" className="link">
                  {t("catalog")}
                </Link>
              </div>
              <div className="header-menu_item">
                <Link to={routes.blogs} className="link text-main-color">
                  {t("blog")}
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
                      setActiveModal("login-modal");
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
    phone: info.contact_info.phone,
    menu: info.layoutCategories,
  };
};

export const Header = connect(mapStateToProps)(_Header);
