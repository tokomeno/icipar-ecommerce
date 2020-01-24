import React from "react";
import { Layout } from "../../layout";
import { Product } from "../../components/product/product";
import { dummyProductData } from "../../data/product";
import { FilterDropdown } from "../../components/fliter-dropdown/filter-dropdown";
import { productCategories } from "../../data/categories";

interface CatalogPageProps {}

export const CatalogPage: React.FC<CatalogPageProps> = props => {
  return (
    <Layout>
      <div className="container">
        <div className="catalog-page">
          <div className="d-flex">
            <div className="filter-block">
              <button className="burger-close d-block d-lg-none">
                <img src="images/close.svg" alt="close" />
              </button>
              <div className="list">
                <FilterDropdown title={"კატეგორია"}>
                  {productCategories.map(ch => (
                    <label className="filter-link">
                      {ch.title}
                      <input type="checkbox" />
                      <span className="checkmark" />
                    </label>
                  ))}
                </FilterDropdown>
                <div className="filter price-filter active">
                  <span className="filter-title d-flex align-items-center justify-content-between">
                    ფასი
                    <div className="toggle-btn">
                      <i className="fas fa-angle-down" />
                      <i className="fas fa-angle-right" />
                    </div>
                  </span>
                  <div className="price-range d-flex justify-content-center">
                    <div className="money_range">
                      <div className="input_blocks d-flex">
                        <div className="inps_bl">
                          <input
                            type="text"
                            className="price"
                            id="min_value"
                            name="priceFrom"
                            defaultValue={0}
                          />
                        </div>
                        <div className="inps_bl">
                          <input
                            type="text"
                            className="price"
                            id="max_value"
                            name="priceEnd"
                            defaultValue={500.0}
                          />
                        </div>
                        <button className="ok-btn">OK</button>
                      </div>
                      <div id="slider-range" />
                    </div>
                  </div>
                </div>
                <div className="cat-banner">
                  <a href="#!" className="d-block">
                    <img src="/assets/uploads/images/ban.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="catalog">
              <div className="catalog_top d-flex justify-content-between align-items-center flex-column flex-lg-row">
                <div className="cat-menu d-flex">
                  <a href="#!" className="cat-menu_item">
                    მთავარი
                  </a>
                  <div className="right"> &gt; </div>
                  <a href="#!" className="cat-menu_item">
                    სუნამოები
                  </a>
                  <div className="right"> &gt; </div>
                  <span className="cat-menu_item">ქალი</span>
                </div>
                <div className="d-flex">
                  <button className="filter-btn d-block d-lg-none">
                    ფილტრები
                  </button>
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
                        ფასი: ზრდადობით
                        <i className="fas fa-chevron-down" />
                        <i className="fas fa-chevron-up" />
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a className="dropdown-item" href="#!">
                          კლებადობით
                        </a>
                        <a className="dropdown-item" href="#!">
                          ზრდადობით
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-wrap justify-content-sm-start justify-content-center">
                {dummyProductData.map(p => (
                  <Product product={p} wrapperClass="catalog-item" />
                ))}
              </div>
              <div className="d-flex justify-content-center">
                <button className="more-btn">მეტი</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </Layout>
  );
};
