import React from "react";
import { productCategories } from "../../data/categories";
import { useTranslation } from "react-i18next";
import { AboutPagesMenu } from "../../components/pageSideMenu";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { IStoreState } from "../../redux/mainReducer";
import { ChangeLang } from "../../components/change-lang";
import { EmailSubscribe } from "../../components/email-subscribe";
import { IMenuCatrogy } from "../../services/layout.http";
import { routes } from "../../routes/routes";

interface FooterProps {
  contact_info: IStoreState["info"]["contact_info"];
  socials: IStoreState["info"]["socials"];
  categories: IMenuCatrogy[];
}

const _Footer: React.FC<FooterProps> = ({
  contact_info,
  socials,
  categories
}) => {
  const { t } = useTranslation();
  const facebook = socials.find(i => i.social === "facebook");
  const google = socials.find(i => i.social === "google");
  const instagram = socials.find(i => i.social === "instagram");
  return (
    <React.Fragment>
      <footer className="site__footer">
        <div className="container">
          <div className="footer">
            <div className="sup-footer d-flex flex-column-reverse flex-md-column">
              <div className="row flex-column-reverse flex-md-row align-items-center">
                <div className="col-lg-3 col-md-6 col-7 text-lg-left text-center pay">
                  <div className="title">{t("payment_type")}</div>
                  <ul className="d-flex justify-content-center justify-content-lg-start card-block">
                    <li className="card-block_item">
                      <img src="/assets/images/card1.svg" alt="mastercard" />
                    </li>
                    <li className="card-block_item">
                      <img src="/assets/images/card2.svg" alt="visa" />
                    </li>
                    <li className="card-block_item">
                      <img
                        src="/assets/images/card3.svg"
                        alt="american express"
                      />
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 col-7 text-lg-left text-center follow">
                  <div className="title">{t("follow")}</div>
                  <ul className="d-flex justify-content-center justify-content-lg-start card-block">
                    <li className="card-block_item">
                      <NavLink
                        to={facebook ? facebook.link : "#!"}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="soc d-flex align-items-center justify-content-center"
                      >
                        <i className="fab fa-facebook-f" />
                      </NavLink>
                    </li>
                    <li className="card-block_item">
                      <NavLink
                        to={instagram ? instagram.link : "#!"}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="soc d-flex align-items-center justify-content-center"
                      >
                        <i className="fab fa-instagram" />
                      </NavLink>
                    </li>
                    <li className="card-block_item">
                      <NavLink
                        to={google ? google.link : "#!"}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="soc d-flex align-items-center justify-content-center"
                      >
                        <i className="fab fa-google" />
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 d-none d-lg-flex align-items-center justify-content-end">
                  <EmailSubscribe />
                  <ChangeLang />
                </div>
              </div>
            </div>
            <div className="sub-footer">
              <div className="row justify-content-center">
                <div className="col-md-3 d-none d-md-block">
                  <div className="title">{t("produkqcia")}</div>
                  {categories.map(c => (
                    <NavLink
                      key={c.id}
                      to={routes.catalog + "?categories[]=" + c.id}
                      className="footer-link"
                    >
                      {c.title}
                    </NavLink>
                  ))}
                </div>
                <div className="col-md-3 d-none d-md-block">
                  <div className="title">{t("about_company")}</div>
                  {AboutPagesMenu.map(menu => (
                    <NavLink key={menu.to} to={menu.to} className="footer-link">
                      {t(menu.title)}
                    </NavLink>
                  ))}
                </div>
                <div className="col-md-3 d-none d-md-block">
                  <div className="title">{t("personal_profile")}</div>
                  <NavLink to={routes.cart} className="footer-link">
                    {t("my_cart")}
                  </NavLink>
                  <NavLink to={routes.favorites} className="footer-link">
                    {t("my_wishes")}
                  </NavLink>
                  <NavLink to={routes.profileInfo} className="footer-link">
                    {t("personal_info")}
                  </NavLink>
                  {/* <NavLink href="#!" className="footer-link">
                    {t("sayidlebis_istoria")}
                  </NavLink> */}
                </div>
                <div className="col-md-3 col-7 contact-block">
                  <div className="title">{t("contact")}</div>
                  <a
                    href={"te:" + contact_info.phone}
                    className="footer-link d-flex"
                  >
                    <img src="/assets/images/phone-w.svg" alt="call" />
                    {contact_info.phone}
                  </a>
                  <a href={contact_info.email} className="footer-link d-flex">
                    <img src="/assets/images/email-w.svg" alt="email" />
                    {contact_info.email}
                  </a>
                  <NavLink to={routes.shops} className="footer-link d-flex">
                    <img src="/assets/images/marker-w.svg" alt="stores" />
                    {t("shops")}
                  </NavLink>
                  {/* <NavLink to={} className="footer-link d-flex">
                    <img src="/assets/images/car-w.svg" alt="car" />
                    {t("delivery_terms")}
                  </NavLink> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rights">
          <div className="container">
            <p className="text-center text-md-left">
              ALL RIGHTS RESERVED, ICI PARIS, 2019
            </p>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

const mapStateToProps = ({ info }: IStoreState) => {
  return {
    contact_info: info.contact_info,
    socials: info.socials,
    categories: info.layoutCategories
  };
};

export const Footer = connect(mapStateToProps)(_Footer);
