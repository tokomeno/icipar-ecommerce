import React from "react";
import { FilterDropdown } from "../../components/fliter-dropdown/filter-dropdown";
import { FilterCheckboxes } from "../../components/fliter-dropdown/filter-checkboxes";
import { CatBanner } from "../../components/cat-banner";
import { useProductFilterAttributes } from "../../hooks/useProductFilterAttributes";
import { useTranslation } from "react-i18next";

interface CatalogFiltersProps {
  // onFilterChange: FOnFilterChange;
}

export const CatalogFilters: React.FC<CatalogFiltersProps> = React.memo(() => {
  const { t } = useTranslation();
  const { productFilterAttributes } = useProductFilterAttributes();

  if (!productFilterAttributes) return <div className="list" />;
  return (
    <div className="list">
      <FilterDropdown type="default" title={t("categories")}>
        <FilterCheckboxes
          filterName="categories"
          checkboxes={productFilterAttributes["categories"]}
        />
      </FilterDropdown>
      <FilterDropdown type="default" title={t("aromas")}>
        <FilterCheckboxes
          filterName="aromas"
          checkboxes={productFilterAttributes["aromas"]}
        />
      </FilterDropdown>
      <FilterDropdown type="default" title={t("genders")}>
        <FilterCheckboxes
          filterName="genders"
          checkboxes={productFilterAttributes["genders"]}
        />
      </FilterDropdown>
      <FilterDropdown type="default" title={t("brands")}>
        <FilterCheckboxes
          filterName="brands"
          checkboxes={productFilterAttributes["brands"]}
        />
      </FilterDropdown>
      <FilterDropdown type="default" title={t("collections")}>
        <FilterCheckboxes
          filterName="collections"
          checkboxes={productFilterAttributes["collections"]}
        />
      </FilterDropdown>
      <FilterDropdown type="default" title={t("usages")}>
        <FilterCheckboxes
          filterName="usages"
          checkboxes={productFilterAttributes["usages"]}
        />
      </FilterDropdown>
      <FilterDropdown type="default" title={t("smells")}>
        <FilterCheckboxes
          filterName="smells"
          checkboxes={productFilterAttributes["smells"]}
        />
      </FilterDropdown>
      <FilterDropdown type="default" title={t("countries")}>
        <FilterCheckboxes
          filterName="countries"
          checkboxes={productFilterAttributes["countries"]}
        />
      </FilterDropdown>
      <FilterDropdown type="color" title={t("color_groups")}>
        <FilterCheckboxes
          type="colors"
          filterName="color_groups"
          checkboxes={productFilterAttributes["color_groups"]}
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
});
