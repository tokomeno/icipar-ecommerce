import React, { ReactElement } from "react";

interface SearchNavProps {}

export const SearchNav: React.FC<SearchNavProps> = props => {
  return (
    <React.Fragment>
      <div className="search-nav">
        <div className="search-nav_block d-flex align-items-center justify-content-between">
          <input type="text" placeholder="დაიწყე ძიება" />
          <button className="delete">
            <i className="fas fa-times"></i>
          </button>
          <button type="submit" className="search-btn">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};
