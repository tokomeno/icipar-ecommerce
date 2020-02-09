import React, { useContext } from "react";
import { useToggle } from "../../hooks/common/useToggle";
import classnames from "classnames";
import { PorductFilterContext } from "../../contexts/productFilterContext";
import { useTranslation } from "react-i18next";
import { useLocation, useHistory } from "react-router-dom";
import { routes } from "../../routes/routes";
import { useInput } from "../../hooks/common/useInput";

interface SearchProps {}

export const Search: React.FC<SearchProps> = props => {
  const { t } = useTranslation();
  const location = useLocation();
  const history = useHistory();
  const { toggle, isActive } = useToggle();
  const { setProductFilterData, productFilterData } = useContext(
    PorductFilterContext
  );
  const { value: keyword, onChange: setKeyword } = useInput("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (location.pathname === routes.catalog) {
      const value = e.target.value;
      setProductFilterData(prevState => ({
        ...prevState,
        keyword: value
      }));
    }
    if (location.pathname !== routes.catalog) {
      setKeyword(e.target.value);
    }
  };

  const getKeywordValue = () => {
    return location.pathname === routes.catalog
      ? productFilterData.keyword
      : keyword;
  };

  const handleSubmit = () => {
    if (location.pathname === routes.catalog) return;
    history.push({ pathname: routes.catalog, search: `?keyword=${keyword}` });
  };

  return (
    <div className="col-md-7">
      <form className="search d-flex justify-content-between">
        <div
          className={classnames("search-dropdown dropdown d-flex", {
            show: isActive
          })}
        >
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="categories"
            onClick={toggle}
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img src="/assets/images/squares.svg" alt="squares icon" />
            <span>კატეგორიები</span>
            <i className="fas fa-angle-down" />
            <i className="fas fa-angle-up" />
          </button>
          <div
            className={classnames("dropdown-menu search-menu", {
              show: isActive
            })}
          >
            <a className="dropdown-item" href="#!">
              პარაფარმაცია
            </a>
          </div>
        </div>
        <input
          type="text"
          className="search-input"
          placeholder={t("enter_search_word")}
          value={getKeywordValue()}
          onChange={handleChange}
        />
        <button onClick={handleSubmit} type="button" className="search-btn">
          <i className="fas fa-search" />
        </button>
      </form>
    </div>
  );
};
