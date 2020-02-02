import React, { useEffect, useState, useRef, useContext } from "react";
import classnames from "classnames";
import {
  IChekedFilters,
  PorductFilterContext
} from "../../contexts/productFilterContext";

interface FilterCheckboxesProps {
  filterName: keyof IChekedFilters;
  checkboxes: { title: string; id: number | string }[];
  type?: "colors";
}
type ICheckbox = (number | string)[];

export const FilterCheckboxes: React.FC<FilterCheckboxesProps> = React.memo(
  ({ checkboxes, type, filterName }) => {
    const { setNewFilter, productFilterData } = useContext(
      PorductFilterContext
    );
    const [checkedIds, setCheckedIds] = useState<ICheckbox>(
      productFilterData[filterName] || []
    );

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

    const isFirstMount = useRef(true);
    useEffect(() => {
      if (!isFirstMount.current) {
        setNewFilter(checkedIds, filterName);
      }
      isFirstMount.current = false;
    }, [checkedIds, setNewFilter, isFirstMount, filterName]);

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