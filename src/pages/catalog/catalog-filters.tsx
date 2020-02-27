import React from "react";
import { FilterDropdown } from "../../components/fliter-dropdown/filter-dropdown";
import { FilterCheckboxes } from "../../components/fliter-dropdown/filter-checkboxes";
import { CatBanner } from "../../components/cat-banner";
import { useProductFilterAttributes } from "../../hooks/useProductFilterAttributes";
import { useTranslation } from "react-i18next";
import { PriceRange } from "./product-price-range";
import { IChekedFilters } from "../../contexts/productFilterContext";

interface CatalogFiltersProps {}

const Filters: Partial<keyof IChekedFilters>[] = [
  "categories",
  "aromas",
  "genders",
  "brands",
  "collections",
  "usages",
  "smells",
  "countries"
];

export const CatalogFilters: React.FC<CatalogFiltersProps> = React.memo(() => {
  const { t } = useTranslation();
  const { productFilterAttributes } = useProductFilterAttributes();

  if (!productFilterAttributes) return <div className="list" />;
  return (
    <div className="list">
      {Filters.map(name => (
        <FilterDropdown type="default" title={t(name)}>
          <FilterCheckboxes
            filterName={name}
            checkboxes={productFilterAttributes[name]}
          />
        </FilterDropdown>
      ))}

      <FilterDropdown type="color" title={t("color_groups")}>
        <FilterCheckboxes
          type="colors"
          filterName="color_groups"
          checkboxes={productFilterAttributes["color_groups"]}
        />
      </FilterDropdown>

      <FilterDropdown type="price" title={t("price")}>
        <PriceRange></PriceRange>
      </FilterDropdown>

      <CatBanner to={"#!"} image={"/assets/uploads/images/ban.png"} />
    </div>
  );
});
