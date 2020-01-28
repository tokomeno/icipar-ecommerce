import React from "react";
import { useToggle } from "../../hooks/common/useToggle";
import classnames from "classnames";

interface FilterDropdownProps {
  title: string;
  classes?: "price-filter";
  childClass: "filter-menu flex-column" | "price-range justify-content-center";
}

export const FilterDropdown: React.FC<FilterDropdownProps> = ({
  title,
  children,
  classes,
  childClass
}) => {
  const { isActive, toggle } = useToggle(true);
  const { isActive: showMoreIsActive } = useToggle(true);
  return (
    <div
      onClick={toggle}
      className={classnames("filter", classes, { active: isActive })}
    >
      <span className="filter-title d-flex align-items-center justify-content-between">
        {title}
        <div className="toggle-btn">
          <i className="fas fa-angle-down" />
          <i className="fas fa-angle-right" />
        </div>
      </span>

      <div
        className={classnames("d-flex", childClass, {
          active: showMoreIsActive
        })}
      >
        {children}
      </div>
    </div>
  );
};
