import React from "react";
import { productCategories } from "../../data/categories";
import { useTranslation } from "react-i18next";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = props => {
  const { t } = useTranslation();

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
                        href="#!"
                        className="soc d-flex align-items-center justify-content-center"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li className="card-block_item">
                      <a
                        href="#!"
                        className="soc d-flex align-items-center justify-content-center"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li className="card-block_item">
                      <a
                        href="#!"
                        className="soc d-flex align-items-center justify-content-center"
                      >
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 d-none d-lg-flex align-items-center justify-content-end">
                  <form className="d-flex">
                    <input type="email" placeholder="შეიყვანეთ ელ. ფოსტა…" />
                    <button type="submit" className="sent">
                      გაგზავნა
                    </button>
                  </form>
                  <a href="#!" className="lang">
                    ENG{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="sub-footer">
              <div className="row justify-content-center">
                <div className="col-md-3 d-none d-md-block">
                  <div className="title">პროდუქცია</div>
                  {productCategories.map(c => (
                    <a key={c.id} href="#!" className="footer-link">
                      {c.title}
                    </a>
                  ))}
                </div>
                <div className="col-md-3 d-none d-md-block">
                  <div className="title">კომპანიის შესახებ</div>
                  <a href="#!" className="footer-link">
                    ჩვებს შესახებ
                  </a>
                  <a href="#!" className="footer-link">
                    კონტაქტი
                  </a>
                  <a href="#!" className="footer-link">
                    როგორ მუშაობს
                  </a>
                  <a href="#!" className="footer-link">
                    მაღაზიები
                  </a>
                  <a href="#!" className="footer-link">
                    FAQ
                  </a>
                </div>
                <div className="col-md-3 d-none d-md-block">
                  <div className="title">პირადი პროფილი</div>
                  <a href="#!" className="footer-link">
                    ჩემი {t("cart")}
                  </a>
                  <a href="#!" className="footer-link">
                    ჩემი {t("wishes")}
                  </a>
                  <a href="#!" className="footer-link">
                    პერსონალური ინფორმაცია
                  </a>
                  <a href="#!" className="footer-link">
                    საყიდლების ისტორია
                  </a>
                </div>
                <div className="col-md-3 col-7 contact-block">
                  <div className="title">კონტაქტი</div>
                  <a href="te:+995322201717" className="footer-link d-flex">
                    <img src="/assets/images/phone-w.svg" alt="call" />
                    +995 32 2 20 17 17
                  </a>
                  <a
                    href="mailto:info@prestige.ge"
                    className="footer-link d-flex"
                  >
                    <img src="/assets/images/email-w.svg" alt="email" />
                    info@prestige.ge
                  </a>
                  <a href="#!" className="footer-link d-flex">
                    <img src="/assets/images/marker-w.svg" alt="stores" />
                    მაღაზიები
                  </a>
                  <a href="#!" className="footer-link d-flex">
                    <img src="/assets/images/car-w.svg" alt="car" />
                    მიტანის პირობები
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
