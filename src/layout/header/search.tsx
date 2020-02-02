import React from "react";
import { useToggle } from "../../hooks/common/useToggle";
import classnames from "classnames";

interface SearchProps {}

export const Search: React.FC<SearchProps> = props => {
  const { toggle, isActive } = useToggle();
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
              სუნამოები
            </a>
            <a className="dropdown-item" href="#!">
              კანის მოვლა
            </a>
            <a className="dropdown-item" href="#!">
              თმის მოვლა
            </a>
            <a className="dropdown-item" href="#!">
              მაკიაჟი
            </a>
            <a className="dropdown-item" href="#!">
              ფრჩხილის მოვლა
            </a>
            <a className="dropdown-item" href="#!">
              პარაფარმაცია
            </a>
          </div>
        </div>
        <input
          type="text"
          className="search-input"
          placeholder="შეიყვანეთ საძიებო სიტყვა…"
        />
        <button type="submit" className="search-btn">
          <i className="fas fa-search" />
        </button>
      </form>
    </div>
  );
};
