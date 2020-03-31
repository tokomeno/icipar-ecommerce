import React, { useContext } from "react";
import { ActiveModalContext } from "../../contexts/modalContex";
import classnames from "classnames";
import { useToggle } from "../../hooks/common/useToggle";
import { NavLink } from "react-router-dom";
import { AboutPagesMenu } from "../../components/pageSideMenu";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { IMenuCatrogy } from "../../services/layout.http";
import { IStoreState } from "../../redux/mainReducer";
import { routes } from "../../routes/routes";

interface BurgerNavProps {
  menu: IMenuCatrogy[];
}

export const _BurgerNav: React.FC<BurgerNavProps> = ({ menu }) => {
  const { activeModal, hideModal } = useContext(ActiveModalContext);
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <div
        className={classnames("burger-nav", {
          active: activeModal === "burger-menu"
        })}
      >
        <button className="burger-close" onClick={hideModal}>
          <img src="/assets/images/close.svg" alt="close" />
        </button>
        <div className="burger-nav_block">
          {menu.map((m, i) => (
            <MenuItem key={i} menu={m} />
          ))}

          {AboutPagesMenu.map(menu => (
            <NavLink key={menu.to} to={menu.to} className="burger-sub_link">
              {t(menu.title)}
            </NavLink>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

const MenuItem: React.FC<{ menu: IMenuCatrogy }> = ({ menu }) => {
  const { toggle, isActive } = useToggle(false);
  const { t } = useTranslation();
  return (
    <div className={classnames("menu-item", { active: isActive })}>
      <div
        onClick={toggle}
        className={classnames(
          "burgermenu-title d-flex align-items-center justify-content-between"
        )}
      >
        <div className="title">{menu.title}</div>
        <i className="fa fa-chevron-down" />
        <i className="fa fa-chevron-up" />
      </div>
      <div className="menu-item_inner">
        <NavLink to={routes.catalog + `?genders[]=2`} className="link">
          {t("man")}
        </NavLink>
        <NavLink to={routes.catalog + `?genders[]=1`} className="link">
          {t("women")}
        </NavLink>
        <NavLink to={routes.blogs} className="link">
          {t("news")}
        </NavLink>
      </div>
    </div>
  );
};

const mapStateToProps = ({ info }: IStoreState) => {
  return {
    menu: info.layoutCategories
  };
};

export const BurgerNav = connect(mapStateToProps)(_BurgerNav);
