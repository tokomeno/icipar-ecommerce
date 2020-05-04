import React from "react";
import { IMenuCatrogy } from "../../services/layout.http";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { routes } from "../../routes/routes";

type HeaderMenuItemProps = {
  item: IMenuCatrogy;
  offer: React.ReactNode;
};
export const HeaderMenuDropdownItem: React.FC<HeaderMenuItemProps> = ({
  item,
  offer,
}) => {
  const { t } = useTranslation();
  return (
    <div className="inner-menu">
      <div className="container">
        <div className="d-flex">
          <div className="inner-menu_block categories">
            <div className="title">{t("categories")}</div>
            <div className="items">
              <NavLink
                to={{
                  pathname: routes.catalog,
                  search: `genders[]=2`,
                  state: "refresh",
                }}
                className="items-link"
              >
                {t("man")}
              </NavLink>
              <NavLink
                to={{
                  pathname: routes.catalog,
                  search: `genders[]=1`,
                  state: "refresh",
                }}
                className="items-link"
              >
                {t("women")}
              </NavLink>
              <NavLink to={routes.blogs} className="items-link">
                {t("news")}
              </NavLink>
            </div>
          </div>
          <div className="inner-menu_block categories">
            <div className="title">{t("brands")}</div>
            <div className="items">
              {Object.keys(item.brands).map((brandLatter) => (
                <React.Fragment key={brandLatter}>
                  <div className="letter">{brandLatter}</div>
                  {item.brands[brandLatter].map((b, i) => (
                    <NavLink
                      key={i}
                      to={{
                        pathname: routes.catalog,
                        state: "refresh",
                        search:
                          "?brands[]=" + b.id + "&slider_brand_id=" + b.id,
                      }}
                      className="letter-link"
                    >
                      {b.name}
                    </NavLink>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
          {offer}
        </div>
      </div>
    </div>
  );
};
