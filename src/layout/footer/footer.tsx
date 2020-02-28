import React from "react";
import { productCategories } from "../../data/categories";
import { useTranslation } from "react-i18next";
import { AboutPagesMenu } from "../../components/pageSideMenu";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { IStoreState } from "../../redux/mainReducer";
import { ChangeLang } from "../../components/change-lang";

interface FooterProps {
  contact_info: IStoreState["info"]["contact_info"];
  socials: IStoreState["info"]["socials"];
}

const _Footer: React.FC<FooterProps> = ({ contact_info, socials }) => {
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
                      <a
                        href={facebook && facebook.link}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="soc d-flex align-items-center justify-content-center"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li className="card-block_item">
                      <a
                        href={instagram && instagram.link}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="soc d-flex align-items-center justify-content-center"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li className="card-block_item">
                      <a
                        href={google && google.link}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="soc d-flex align-items-center justify-content-center"
                      >
                        <i className="fab fa-google" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 d-none d-lg-flex align-items-center justify-content-end">
                  <form className="d-flex">
                    <input type="email" placeholder={t("enter_your_email")} />
                    <button type="button" className="sent">
                      {t("send")}
                    </button>
                  </form>
                  <ChangeLang />
                </div>
              </div>
            </div>
            <div className="sub-footer">
              <div className="row justify-content-center">
                <div className="col-md-3 d-none d-md-block">
                  <div className="title">{t("produkqcia")}</div>
                  {productCategories.map(c => (
                    <a key={c.id} href="#!" className="footer-link">
                      {c.title}
                    </a>
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
                  <a href="#!" className="footer-link">
                    {t("my_cart")}
                  </a>
                  <a href="#!" className="footer-link">
                    {t("my_wishes")}
                  </a>
                  <a href="#!" className="footer-link">
                    {t("personal_info")}
                  </a>
                  <a href="#!" className="footer-link">
                    {t("sayidlebis_istoria")}
                  </a>
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
                  <a href="#!" className="footer-link d-flex">
                    <img src="/assets/images/marker-w.svg" alt="stores" />
                    {t("shops")}
                  </a>
                  <a href="#!" className="footer-link d-flex">
                    <img src="/assets/images/car-w.svg" alt="car" />
                    {t("delivery_terms")}
                  </a>
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
    socials: info.socials
  };
};

export const Footer = connect(mapStateToProps)(_Footer);
