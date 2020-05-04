import React from "react";

import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { routes } from "../../routes/routes";
import { NavHashLink } from "react-router-hash-link";

const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

type HeaderMenuItemProps = {
  offer: React.ReactNode;
};
export const HeaderMenuBrandDropdownItem: React.FC<HeaderMenuItemProps> = ({
  offer,
}) => {
  const { t } = useTranslation();
  return (
    <div className="inner-menu">
      <div className="container">
        <div className="d-flex">
          <div className="brands-list">
            <div className="title">{t("brands_a_z")}</div>
            <div className="list">
              {alphabet.map((l, i) => (
                <NavHashLink
                  key={i}
                  to={routes.allBrands + "#" + l}
                  className="list-item"
                >
                  {l}
                </NavHashLink>
              ))}

              <NavLink to={routes.allBrands} className="list-item">
                {t("all")}
              </NavLink>
            </div>
          </div>

          {offer}
        </div>
      </div>
    </div>
  );
};
