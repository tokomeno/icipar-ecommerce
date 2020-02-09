import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ISortByPrice, ascOrDesc } from "../../hooks/useProducts/useProducts";
import { PorductFilterContext } from "../../contexts/productFilterContext";
import { useToggle } from "../../hooks/common/useToggle";
import classnames from "classnames";
import { ActiveModalContext } from "../../contexts/modalContex";
interface PriceSorterProps {
  ordering?: "price" | "-price";
}

export const PriceSorter: React.FC<PriceSorterProps> = ({ ordering }) => {
  const { t } = useTranslation();

  const { toggle, isActive } = useToggle(false);

  const { setProductFilterData } = useContext(PorductFilterContext);
  const { setActiveModal } = useContext(ActiveModalContext);

  const sortByPrice: ISortByPrice = asc_or_desc => {
    setProductFilterData(prevState => ({
      ...prevState,
      order: ascOrDesc.asc === asc_or_desc ? "price" : "-price"
    }));
  };
  return (
    <div className="d-flex">
      <button
        onClick={() => setActiveModal("filter")}
        className="filter-btn d-block d-lg-none"
      >
        {t("filters")}
      </button>
      <div className="d-flex sort-price">
        <div className={classnames("dropdown show", { show: isActive })}>
          <button
            onClick={toggle}
            className="btn btn-secondary dropdown-toggle d-flex align-items-center"
            type="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {t("price")}: {ordering === "-price" && t("descending")}
            {ordering === "price" && t("ascending")}
            {ordering !== "price" &&
              ordering !== "-price" &&
              t("choose_price_filter")}
            <i className="fas fa-chevron-down" />
            <i className="fas fa-chevron-up" />
          </button>
          <div className={classnames("dropdown-menu", { show: isActive })}>
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
