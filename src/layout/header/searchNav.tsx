import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import classnames from "classnames";
import { ActiveModalContext } from "../../contexts/modalContex";
import { ProductAutocompleteDropdown } from "../../components/product-autocomplete-dropdown";
import { useProductAutocomplete } from "../../hooks/useProductAutocomplete";

interface SearchNavProps {}

export const SearchNav: React.FC<SearchNavProps> = (props) => {
  const { activeModal, hideModal } = useContext(ActiveModalContext);
  const { t } = useTranslation();
  const {
    handleSubmit,
    resetProducts,
    products,
    keyword,
    setKeyword,
  } = useProductAutocomplete();
  return (
    <React.Fragment>
      <div
        className={classnames("search-nav", {
          active: activeModal === "search-modal",
        })}
      >
        <div className="search-nav_block d-flex align-items-center justify-content-between">
          <input
            value={keyword}
            onChange={setKeyword}
            type="text"
            placeholder={t("start_search")}
          />
          <button className="delete" onClick={() => hideModal()}>
            <i className="fas fa-times"></i>
          </button>
          <button onClick={handleSubmit} type="button" className="search-btn">
            <i className="fas fa-search"></i>
          </button>
        </div>
        <ProductAutocompleteDropdown
          resetProducts={resetProducts}
          products={products}
        />
      </div>
    </React.Fragment>
  );
};
