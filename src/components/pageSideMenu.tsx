import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface PageSideMenuProps {}

export const AboutPagesMenu = [
  { title: "about_us", to: "/about-us" },
  { title: "how_it_works", to: "/how-it-works" },
  // { title: "delivery_terms", to: "#!" },
  { title: "contact", to: "/contact" },
  { title: "faq", to: "/faq" }
];
export const PageSideMenu: React.FC<PageSideMenuProps> = props => {
  const { t } = useTranslation();
  return (
    <div className="col-md-3 d-none d-lg-block">
      <div className="aboutmenu">
        {AboutPagesMenu.map(menu => (
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
