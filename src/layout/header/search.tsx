import React from "react";

interface SearchProps {}

export const Search: React.FC<SearchProps> = props => {
  return (
    <div className="col-md-7">
      <form className="search d-flex justify-content-between">
        <div className="search-dropdown dropdown d-flex __show">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="categories"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img src="/assets/images/squares.svg" alt="squares icon" />
            <span>კატეგორიები</span>
            <i className="fas fa-angle-down" />
            <i className="fas fa-angle-up" />
          </button>
          <div className="dropdown-menu search-menu __show">
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
