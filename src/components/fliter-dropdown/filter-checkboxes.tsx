import React, { useEffect, useState, useRef } from "react";
import classnames from "classnames";
import { IChekedFilters } from "../../contexts/productFilterContext";

interface FilterCheckboxesProps {
  filterName: keyof IChekedFilters;
  checkboxes: { title: string; id: number | string }[];
  onCheckBoxChange: (
    checkedIds: (string | number)[],
    filterName: keyof IChekedFilters
  ) => void;
  type?: "colors";
}

// type ICheckbox = { [key in string | number]: boolean };
type ICheckbox = (number | string)[];
export const FilterCheckboxes: React.FC<FilterCheckboxesProps> = React.memo(
  ({ checkboxes, onCheckBoxChange, type, filterName }) => {
    const [checkedIds, setCheckedIds] = useState<ICheckbox>([]);

    const handleChange = (ch: { title: string; id: number | string }) => {
      if (isChecked(ch.id)) {
        setCheckedIds(prevState => prevState.filter(i => i !== ch.id));
      } else {
        setCheckedIds(prevState => [...prevState, ch.id]);
      }
    };
    const isChecked = (id: string | number): boolean => {
      return checkedIds.indexOf(id) > -1;
    };

    const hasMounted = useRef(false);
    useEffect(() => {
      if (hasMounted.current) {
        onCheckBoxChange(checkedIds, filterName);
      }
      hasMounted.current = true;
    }, [checkedIds, onCheckBoxChange, hasMounted, filterName]);

    return (
      <React.Fragment>
        {checkboxes.map(ch => (
          <label
            key={ch.id}
            className={classnames("filter-link", { color: type === "colors" })}
            style={{
              backgroundColor: type === "colors" ? ch.title : undefined
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
    );
  }
);
