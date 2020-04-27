import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { routes } from "../routes/routes";

interface PageSideMenuProps {}

export const AboutPagesMenu = [
  { title: "about_us", to: routes.aboutUs },
  { title: "how_it_works", to: routes.howItWorks },
  // { title: "delivery_terms", to: "#!" },
  { title: "contact", to: routes.contact },
  { title: "faq", to: routes.faq },
];
export const PageSideMenu: React.FC<PageSideMenuProps> = (props) => {
  const { t } = useTranslation();
  return (
    <div className="col-md-3 d-none d-lg-block">
      <div className="aboutmenu">
        {AboutPagesMenu.map((menu) => (
          <NavLink
            key={menu.to}
            activeClassName="active"
            exact
            to={menu.to}
            className="aboutmenu-item"
          >
            {t(menu.title)}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
