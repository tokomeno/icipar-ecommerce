import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MenuDropdown } from "./menu-dropdown";
import { connect } from "react-redux";
import { IStoreState } from "../../redux/mainReducer";
import { IFavoritesState } from "../../redux/favorites/favoritesTypes";
import { routes } from "../../routes/routes";

interface FavoritesNavbarDropdownProps {
  items: IFavoritesState["items"];
}

const _FavoritesNavbarDropdown: React.FC<FavoritesNavbarDropdownProps> = ({
  items
}) => {
  const { t } = useTranslation();
  return (
    <MenuDropdown
      wrapperClassName="hdr-fav"
      buttonChildren={<img src="/assets/images/heart.svg" alt="favorite" />}
      navLink={
        <NavLink
          to={routes.favorites}
          className="d-flex justify-content-between cart-btn"
          rel="noopener noreferrer"
        >
          {t("wishes")}
          {/* <img src="/assets/images/arrow-right.svg" alt="right arrow" /> */}
        </NavLink>
      }
      products={items}
    />
  );
};

const mapStateToProps = ({ favorites }: IStoreState) => ({
  items: favorites.items
});

export const FavoritesNavbarDropdown = connect(mapStateToProps)(
  _FavoritesNavbarDropdown
);
