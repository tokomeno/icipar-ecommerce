import React from "react";
import { Layout } from "../../layout";
import { IProductCetegory } from "../../data/categories";
import { useToggle } from "../../hooks/common/useToggle";
import classnames from "classnames";

interface FilterDropdownProps {
  title: string;
  //   checkboxes: { id: number; title: string }[];
}

export const FilterDropdown: React.FC<FilterDropdownProps> = ({
  title,
  children
}) => {
  const { isActive, toggle } = useToggle(true);
  const { isActive: showMoreIsActive, toggle: showMoreToggler } = useToggle(
    true
  );
  return (
    <div
      onClick={toggle}
      className={classnames("filter", { active: isActive })}
    >
      <span className="filter-title d-flex align-items-center justify-content-between">
        {title}
        <div className="toggle-btn">
          <i className="fas fa-angle-down" />
          <i className="fas fa-angle-right" />
        </div>
      </span>

      <div
        className={classnames("filter-menu d-flex flex-column", {
          active: showMoreIsActive
        })}
      >
        {children}
      </div>
    </div>
  );
};
