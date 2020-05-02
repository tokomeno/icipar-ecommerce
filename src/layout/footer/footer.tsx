import React from "react";
import { useTranslation } from "react-i18next";
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
  categories,
}) => {
  const { t } = useTranslation();
  const facebook = socials.find((i) => i.social === "facebook");
  const google = socials.find((i) => i.social === "google");
  const instagram = socials.find((i) => i.social === "instagram");
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
                        href={facebook ? facebook.link : "#!"}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="soc d-flex align-items-center justify-content-center"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li className="card-block_item">
                      <a
                        href={instagram ? instagram.link : "#!"}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="soc d-flex align-items-center justify-content-center"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li className="card-block_item">
                      <a
                        href={google ? google.link : "#!"}
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
                  <EmailSubscribe />
                  <ChangeLang />
                </div>
              </div>
            </div>
            <div className="sub-footer">
              <div className="row justify-content-center">
                <div className="col-md-3 d-none d-md-block">
                  <div className="title">{t("produkqcia")}</div>
                  {categories.map((c) => (
                    <NavLink
                      key={c.id}
                      to={{
                        pathname: routes.catalog,
                        search: "categories[]=" + c.id,
                        state: "refresh",
                      }}
                      className="footer-link"
                    >
                      {c.title}
                    </NavLink>
                  ))}
                  <NavLink
                    to={{
                      pathname: routes.catalog,
                      search:
                        "discount_range[]=0-0.25&discount_range[]=0.25-0.5&discount_range[]=0.5-0.75&discount_range[]=0.75-1",
                      state: "refresh",
                    }}
                    className="footer-link"
                  >
                    {t("sale")}
                  </NavLink>
                  <NavLink to={routes.allBrands} className="footer-link">
                    {t("brands")}
                  </NavLink>
                  <NavLink to={routes.giftCard} className="footer-link">
                    {t("gift_card")}
                  </NavLink>
                  <NavLink to={routes.blogs} className="footer-link">
                    {t("blog")}
                  </NavLink>
                </div>
                <div className="col-md-3 d-none d-md-block">
                  <div className="title">{t("about_company")}</div>

                  <NavLink
                    to={routes.staticPages("about-us")}
                    className="footer-link"
                  >
                    {t("about_us")}
                  </NavLink>
                  <NavLink to={routes.contact} className="footer-link">
                    {t("contact")}
                  </NavLink>
                  <NavLink
                    to={routes.staticPages("how_it_works")}
                    className="footer-link"
                  >
                    {t("how_it_works")}
                  </NavLink>
                  <NavLink to={routes.shops} className="footer-link">
                    {t("shops")}
                  </NavLink>

                  <NavLink
                    to={routes.staticPages("faq")}
                    className="footer-link"
                  >
                    {t("faq")}
                  </NavLink>
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
                  <NavLink to={routes.orders} className="footer-link">
                    {t("order_history")}
                  </NavLink>
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
                  <NavLink
                    to={routes.staticPages("delivery_terms")}
                    className="footer-link d-flex"
                  >
                    <img src="/assets/images/car-w.svg" alt="car" />
                    {t("delivery_terms")}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rights">
          <div className="container">
            <p className="text-center text-md-left">
              {t("copyright_text_footer", { year: new Date().getFullYear() })}
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
    categories: info.layoutCategories,
  };
};

export const Footer = connect(mapStateToProps)(_Footer);
