import React from "react";
import { useTranslation } from "react-i18next";
import { ISortByPrice, ascOrDesc } from "../../hooks/useProducts";

interface PriceSorterProps {
  sortByPrice: ISortByPrice;
  sortedBy: ascOrDesc;
}

export const PriceSorter: React.FC<PriceSorterProps> = ({
  sortByPrice,
  sortedBy
}) => {
  const { t } = useTranslation();
  return (
    <div className="d-flex">
      <button className="filter-btn d-block d-lg-none">{t("filters")}</button>
      <div className="d-flex sort-price">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle d-flex align-items-center"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {t("price")}:{" "}
            {sortedBy === ascOrDesc.asc ? t("ascending") : t("descending")}
            <i className="fas fa-chevron-down" />
            <i className="fas fa-chevron-up" />
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <button
              className="dropdown-item"
              onClick={() => sortByPrice(ascOrDesc.asc)}
            >
              {t("ascending")}
            </button>
            <button
              className="dropdown-item"
              onClick={() => sortByPrice(ascOrDesc.desc)}
            >
              {t("descending")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
