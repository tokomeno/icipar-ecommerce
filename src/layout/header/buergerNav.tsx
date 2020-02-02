import React, { useContext } from "react";
import { ActiveModalContext } from "../../contexts/modalContex";
import classnames from "classnames";
import { useToggle } from "../../hooks/common/useToggle";
import { NavLink } from "react-router-dom";
import { AboutPagesMenu } from "../../components/pageSideMenu";
import { useTranslation } from "react-i18next";

interface BurgerNavProps {}

export const BurgerNav: React.FC<BurgerNavProps> = props => {
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
          <MenuItem />

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

const MenuItem = () => {
  const { toggle, isActive } = useToggle(false);
  return (
    <div className={classnames("menu-item", { active: isActive })}>
      <div
        onClick={toggle}
        className={classnames(
          "burgermenu-title d-flex align-items-center justify-content-between"
        )}
      >
        <div className="title">სუნამოები</div>
        <i className="fa fa-chevron-down" />
        <i className="fa fa-chevron-up" />
      </div>
      <div className="menu-item_inner">
        <NavLink to="#!" className="link">
          ყველა
        </NavLink>
        <NavLink to="#!" className="link">
          მამაკაცი
        </NavLink>
      </div>
    </div>
  );
};
