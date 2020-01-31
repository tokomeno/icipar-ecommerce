import React, { useState, useCallback, useEffect, useRef } from "react";
import { FilterDropdown } from "../../components/fliter-dropdown/filter-dropdown";
import { FilterCheckboxes } from "../../components/fliter-dropdown/filter-checkboxes";
import { CatBanner } from "../../components/cat-banner";
import { useProductFilterData } from "../../hooks/useProductFilterData";
import { useTranslation } from "react-i18next";
import { FOnFilterChange, IProductFilterObject } from "./catalog-page";
import { IChekedFilters } from "../../contexts/productFilterContext";

interface CatalogFiltersProps {
  onFilterChange: FOnFilterChange;
}

export const CatalogFilters: React.FC<CatalogFiltersProps> = ({
  onFilterChange
}) => {
  const { t } = useTranslation();
  const { productFilterData } = useProductFilterData();

  // const checkedIds = useMemo(() => function() {}, []);

  if (!productFilterData) return <div className="list" />;
  return (
    <div className="list">
      <FilterDropdown type="default" title={t("categories")}>
        <FilterCheckboxes
          filterName="categories"
          onCheckBoxChange={onFilterChange}
          checkboxes={productFilterData["categories"]}
        />
      </FilterDropdown>
      <FilterDropdown type="default" title={t("aromas")}>
        <FilterCheckboxes
          filterName="aromas"
          onCheckBoxChange={onFilterChange}
          checkboxes={productFilterData["aromas"]}
        />
      </FilterDropdown>
      <FilterDropdown type="default" title={t("genders")}>
        <FilterCheckboxes
          filterName="genders"
          onCheckBoxChange={onFilterChange}
          checkboxes={productFilterData["genders"]}
        />
      </FilterDropdown>
      <FilterDropdown type="default" title={t("brands")}>
        <FilterCheckboxes
          filterName="brands"
          onCheckBoxChange={onFilterChange}
          checkboxes={productFilterData["brands"]}
        />
      </FilterDropdown>
      <FilterDropdown type="default" title={t("collections")}>
        <FilterCheckboxes
          filterName="collections"
          onCheckBoxChange={onFilterChange}
          checkboxes={productFilterData["collections"]}
        />
      </FilterDropdown>
      <FilterDropdown type="default" title={t("usages")}>
        <FilterCheckboxes
          filterName="usages"
          onCheckBoxChange={onFilterChange}
          checkboxes={productFilterData["usages"]}
        />
      </FilterDropdown>
      <FilterDropdown type="default" title={t("smells")}>
        <FilterCheckboxes
          filterName="smells"
          onCheckBoxChange={onFilterChange}
          checkboxes={productFilterData["smells"]}
        />
      </FilterDropdown>
      <FilterDropdown type="default" title={t("countries")}>
        <FilterCheckboxes
          filterName="countries"
          onCheckBoxChange={onFilterChange}
          checkboxes={productFilterData["countries"]}
        />
      </FilterDropdown>
      <FilterDropdown type="color" title={t("color_groups")}>
        <FilterCheckboxes
          type="colors"
          filterName="color_groups"
          onCheckBoxChange={onFilterChange}
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
