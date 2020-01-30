import React from "react";
import { useToggle } from "../../hooks/common/useToggle";
import classnames from "classnames";

interface FilterDropdownProps {
  title: string;
  type: "default" | "price" | "color";
}

const typeClasses = {
  default: {
    parentClass: "",
    childClass: "filter-menu flex-column"
  },
  price: {
    parentClass: "price-filter",
    childClass: "price-range justify-content-center"
  },
  color: {
    parentClass: "",
    childClass: "filter-menu flex-wrap"
  }
};

export const FilterDropdown: React.FC<FilterDropdownProps> = ({
  title,
  children,
  type
}) => {
  const { isActive, toggle } = useToggle(true);
  const { isActive: showMoreIsActive } = useToggle(true);

  return (
    <div
      onClick={toggle}
      className={classnames("filter", typeClasses[type].parentClass, {
        active: isActive
      })}
    >
      <span className="filter-title d-flex align-items-center justify-content-between">
        {title}
        <div className="toggle-btn">
          <i className="fas fa-angle-down" />
          <i className="fas fa-angle-right" />
        </div>
      </span>

      <div
        className={classnames("d-flex", typeClasses[type].childClass, {
          active: showMoreIsActive
        })}
      >
        {children}
      </div>
    </div>
  );
};
