import React, { useState, useCallback, useEffect } from "react";
import { FilterDropdown } from "../../components/fliter-dropdown/filter-dropdown";
import { FilterCheckboxes } from "../../components/fliter-dropdown/filter-checkboxes";
import { CatBanner } from "../../components/cat-banner";
import { useProductFilterData } from "../../hooks/useProductFilterData";
import { useTranslation } from "react-i18next";
import { FOnFilterChange } from "./catalog-page";

interface CatalogFiltersProps {
  onFilterChange: FOnFilterChange;
}

export interface IChekedFilters {
  categories: (string | number)[];
  aromas: (string | number)[];
  genders: (string | number)[];
  brands: (string | number)[];
  collections: (string | number)[];
  usages: (string | number)[];
  smells: (string | number)[];
  color_groups: (string | number)[];
  countries: (string | number)[];
}
const defaultData: IChekedFilters = {
  categories: [],
  aromas: [],
  genders: [],
  brands: [],
  collections: [],
  usages: [],
  smells: [],
  color_groups: [],
  countries: []
};

export const CatalogFilters: React.FC<CatalogFiltersProps> = ({
  onFilterChange
}) => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<IChekedFilters>(defaultData);
  const { productFilterData } = useProductFilterData();

  const onCheckBoxChange = useCallback(
    (ids: (number | string)[], filterName: keyof IChekedFilters) => {
      setFilter(prevState => ({ ...prevState, [filterName]: ids }));
    },
    [setFilter]
  );

  useEffect(() => {
    onFilterChange(filter);
  }, [filter, onFilterChange]);

  if (!productFilterData) return <div className="list" />;
  return (
    <div className="list">
      <FilterDropdown type="default" title={t("categories")}>
        <FilterCheckboxes
          filterName="categories"
          onCheckBoxChange={onCheckBoxChange}
          checkboxes={productFilterData["categories"]}
        />
      </FilterDropdown>
      <FilterDropdown type="default" title={t("aromas")}>
        <FilterCheckboxes
          filterName="aromas"
          onCheckBoxChange={onCheckBoxChange}
          checkboxes={productFilterData["aromas"]}
        />
      </FilterDropdown>
      <FilterDropdown type="default" title={t("genders")}>
        <FilterCheckboxes
          filterName="genders"
          onCheckBoxChange={onCheckBoxChange}
          checkboxes={productFilterData["genders"]}
        />
      </FilterDropdown>
      <FilterDropdown type="default" title={t("brands")}>
        <FilterCheckboxes
          filterName="brands"
          onCheckBoxChange={onCheckBoxChange}
          checkboxes={productFilterData["brands"]}
        />
      </FilterDropdown>
      <FilterDropdown type="default" title={t("collections")}>
        <FilterCheckboxes
          filterName="collections"
          onCheckBoxChange={onCheckBoxChange}
          checkboxes={productFilterData["collections"]}
        />
      </FilterDropdown>
      <FilterDropdown type="default" title={t("usages")}>
        <FilterCheckboxes
          filterName="usages"
          onCheckBoxChange={onCheckBoxChange}
          checkboxes={productFilterData["usages"]}
        />
      </FilterDropdown>
      <FilterDropdown type="default" title={t("smells")}>
        <FilterCheckboxes
          filterName="smells"
          onCheckBoxChange={onCheckBoxChange}
          checkboxes={productFilterData["smells"]}
        />
      </FilterDropdown>
      <FilterDropdown type="default" title={t("countries")}>
        <FilterCheckboxes
          filterName="countries"
          onCheckBoxChange={onCheckBoxChange}
          checkboxes={productFilterData["countries"]}
        />
      </FilterDropdown>
      <FilterDropdown type="color" title={t("color_groups")}>
        <FilterCheckboxes
          type="colors"
          filterName="color_groups"
          onCheckBoxChange={onCheckBoxChange}
          checkboxes={productFilterData["color_groups"]}
        />
      </FilterDropdown>

      <FilterDropdown type="price" title={"ფასი"}>
        <div className="money_range">
          <div className="input_blocks d-flex">
            <div className="inps_bl">
              <input
                type="text"
                className="price"
                id="min_value"
                name="priceFrom"
                defaultValue={0}
              />
            </div>
            <div className="inps_bl">
              <input
                type="text"
                className="price"
                id="max_value"
                name="priceEnd"
                defaultValue={500.0}
              />
            </div>
            <button className="ok-btn">OK</button>
          </div>
          <div id="slider-range" />
        </div>
      </FilterDropdown>
      <CatBanner to={"#!"} image={"/assets/uploads/images/ban.png"} />
    </div>
  );
};
