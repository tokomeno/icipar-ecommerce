import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Dropdown } from "react-bootstrap";
import { IMenuCatrogy } from "../../services/layout.http";
import { ProductAutocompleteDropdown } from "../../components/product-autocomplete-dropdown";
import { useProductAutocomplete } from "../../hooks/useProductAutocomplete";
import { connect } from "react-redux";
import { IStoreState } from "../../redux/mainReducer";

interface SearchProps {
  categories: IMenuCatrogy[];
}

const _Search: React.FC<SearchProps> = ({ categories = [] }) => {
  const { t } = useTranslation();
  const {
    handleSubmit,
    resetProducts,
    products,
    keyword,
    setKeyword,
    activeTab,
    setActiveTab
  } = useProductAutocomplete();

  return (
    <div className="col-md-7" style={{ position: "relative" }}>
      <form className="search d-flex justify-content-between">
        <Dropdown className={"search-dropdown dropdown d-flex"}>
          <Dropdown.Toggle className="btn btn-secondary " id="categories">
            <img src="/assets/images/squares.svg" alt="squares icon" />
            <span>{activeTab ? activeTab.title : t("categories")}</span>
            <i className="fas fa-angle-down" />
            <i className="fas fa-angle-up" />
          </Dropdown.Toggle>
          <Dropdown.Menu className="search-menu">
            {!activeTab ? null : (
              <a
                onClick={e => {
                  e.preventDefault();
                  setActiveTab(null);
                }}
                className="dropdown-item"
                href="#!"
              >
                {t("categories")}
              </a>
            )}
            {categories.map(c => (
              <Dropdown.Item
                key={c.id}
                className="dropdown-item"
                onClick={() => {
                  setActiveTab(c);
                }}
              >
                {c.title}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <input
          type="text"
          className="search-input"
          placeholder={t("enter_search_word")}
          value={keyword}
          onChange={setKeyword}
        />
        <button onClick={handleSubmit} type="button" className="search-btn">
          <i className="fas fa-search" />
        </button>
      </form>
      <ProductAutocompleteDropdown
        resetProducts={resetProducts}
        products={products}
      />
    </div>
  );
};

const mapStateToProps = ({ info }: IStoreState) => ({
  categories: info.layoutCategories
});

export const Search = connect(mapStateToProps)(_Search);
