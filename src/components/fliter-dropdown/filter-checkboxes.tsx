import React, { useEffect, useState } from "react";
import classnames from "classnames";
import { IChekedFilters } from "../../pages/catalog/catalog-filters";

interface FilterCheckboxesProps {
  filterName: keyof IChekedFilters;
  checkboxes: { title: string; id: number | string }[];
  onCheckBoxChange: (
    checkedIds: string[] | number[],
    filterName: keyof IChekedFilters
  ) => void;
  type?: "colors";
}

type ICheckbox = { [key in string | number]: boolean };
export const FilterCheckboxes: React.FC<FilterCheckboxesProps> = ({
  checkboxes,
  onCheckBoxChange,
  type,
  filterName
}) => {
  const [checkedIds, setCheckedIds] = useState<ICheckbox>({});

  useEffect(() => {
    const idsObj: ICheckbox = {};
    checkboxes.forEach(i => {
      idsObj[i.id] = false;
    });
    setCheckedIds(idsObj);
  }, [checkboxes]);

  useEffect(() => {
    const checkedIdArray = [];
    for (let k in checkedIds) {
      if (checkedIds[k]) {
        checkedIdArray.push(k);
      }
    }
    onCheckBoxChange(checkedIdArray, filterName);
  }, [checkedIds, onCheckBoxChange, filterName]);

  const handleChange = (id: string | number) => {
    setCheckedIds(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  return (
    <React.Fragment>
      {checkboxes.map(ch => (
        <label
          key={ch.id}
          className={classnames("filter-link", { color: type === "colors" })}
          style={{ backgroundColor: type === "colors" ? ch.title : undefined }}
        >
          {type === "colors" ? <div className="color" /> : ch.title}
          <input
            checked={!!checkedIds[ch.id]}
            onChange={() => handleChange(ch.id)}
            type="checkbox"
          />
          <span className="checkmark" />
        </label>
      ))}
    </React.Fragment>
  );
};
