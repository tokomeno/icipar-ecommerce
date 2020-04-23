import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ISortByPrice, ascOrDesc } from "../../hooks/useProducts/useProducts";
import { PorductFilterContext } from "../../contexts/productFilterContext";
import { ActiveModalContext } from "../../contexts/modalContex";
import { Dropdown } from "react-bootstrap";
interface PriceSorterProps {
  ordering?: "price" | "-price";
}

export const PriceSorter: React.FC<PriceSorterProps> = ({ ordering }) => {
  const { t } = useTranslation();

  const { setPriceSorter } = useContext(PorductFilterContext);
  const { setActiveModal } = useContext(ActiveModalContext);

  const sortByPrice: ISortByPrice = (asc_or_desc) => {
    setPriceSorter(ascOrDesc.asc === asc_or_desc ? "price" : "-price");
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
        <Dropdown>
          <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
            {t("price")}: {ordering === "-price" && t("descending")}
            {ordering === "price" && t("ascending")}
            {ordering !== "price" &&
              ordering !== "-price" &&
              t("choose_price_filter")}
            <i className="fas fa-chevron-down" />
            <i className="fas fa-chevron-up" />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              onClick={() => sortByPrice(ascOrDesc.asc)}
              eventKey="1"
            >
              {t("ascending")}
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => sortByPrice(ascOrDesc.desc)}
              eventKey="2"
            >
              {t("descending")}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

const CustomToggle = React.forwardRef<any, any>(
  ({ children, onClick }, ref) => (
    <button
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className="btn btn-secondary dropdown-toggle d-flex align-items-center"
      type="button"
    >
      {children}
    </button>
  )
);
