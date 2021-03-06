import React, { useContext } from "react";
import classnames from "classnames";
import {
  IFilterCheckboxes,
  PorductFilterContext,
} from "../../contexts/productFilterContext";

interface ICheckbox {
  title: string;
  id: number | string;
  children?: { title: string; id: number | string }[];
}

interface FilterCheckboxesProps {
  filterName: keyof IFilterCheckboxes;
  checkboxes: ICheckbox[];
  type?: "colors";
}

export const FilterCheckboxes: React.FC<FilterCheckboxesProps> = React.memo(
  ({ checkboxes, type, filterName }) => {
    const { setFilterCheckbox, productFilterData } = useContext(
      PorductFilterContext
    );
    const isChecked = (id: string | number): boolean => {
      const checkedIds = productFilterData[filterName] || [];
      return checkedIds.indexOf(id) > -1;
    };

    const handleChange = (ch: ICheckbox) => {
      const checkedIds = productFilterData[filterName] || [];
      let newCheckedIds;
      if (isChecked(ch.id)) {
        newCheckedIds = checkedIds.filter((i) => i !== ch.id);
      } else {
        newCheckedIds = [...checkedIds, ch.id];
        if (ch.children) {
          // TODO: uncheck children
        }
      }
      setFilterCheckbox(newCheckedIds, filterName);
    };

    return (
      <React.Fragment>
        {checkboxes.map((ch) => (
          <React.Fragment key={ch.id}>
            <label
              key={ch.id}
              className={classnames("filter-link", {
                color: type === "colors",
              })}
              style={{
                backgroundColor: type === "colors" ? ch.title : undefined,
              }}
            >
              {type === "colors" ? <div className="color" /> : ch.title}
              <input
                checked={isChecked(ch.id)}
                onChange={() => handleChange(ch)}
                type="checkbox"
              />
              <span className="checkmark" />
            </label>
            {ch.children &&
              isChecked(ch.id) &&
              ch.children.map((ch) => (
                <label
                  key={ch.id}
                  className={classnames("filter-link ml-5", {
                    color: type === "colors",
                  })}
                  style={{
                    backgroundColor: type === "colors" ? ch.title : undefined,
                  }}
                >
                  {type === "colors" ? <div className="color" /> : ch.title}
                  <input
                    checked={isChecked(ch.id)}
                    onChange={() => handleChange(ch)}
                    type="checkbox"
                  />
                  <span className="checkmark" />
                </label>
              ))}
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  }
);
