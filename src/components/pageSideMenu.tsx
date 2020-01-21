import React from "react";
import { NavLink } from "react-router-dom";

interface PageSideMenuProps {}

export const PageSideMenu: React.FC<PageSideMenuProps> = props => {
  return (
    <div className="col-md-3 d-none d-lg-block">
      <div className="aboutmenu">
        <NavLink
          activeClassName="active"
          exact
          to="/about-us"
          className="aboutmenu-item"
        >
          ჩვენს შესახებ
        </NavLink>
        <NavLink
          activeClassName="active"
          exact
          to="/how-it-works"
          className="aboutmenu-item"
        >
          როგორ მუშაობს
        </NavLink>
        <NavLink
          activeClassName="active"
          exact
          to="#"
          className="aboutmenu-item"
        >
          მიტანის პირობები
        </NavLink>
        <NavLink
          activeClassName="active"
          exact
          to="/contact"
          className="aboutmenu-item"
        >
          კონტაქტი
        </NavLink>

        <NavLink activeClassName="active" to="/faq" className="aboutmenu-item">
          FAQ
        </NavLink>
      </div>
    </div>
  );
};
