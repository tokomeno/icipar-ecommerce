import React, { useCallback, useMemo } from "react";
import { Layout } from "../../layout";
import { Product } from "../../components/product/product";
import { dummyProductData, IProduct } from "../../data/product";
import { FilterDropdown } from "../../components/fliter-dropdown/filter-dropdown";
import { productCategories } from "../../data/categories";
import { useProducts, IProductFilter } from "../../hooks/useProducts";
import { useTranslation } from "react-i18next";
import { CatBanner } from "../../components/cat-banner";
import { PriceSorter } from "../../components/product-filters/price-sorter";

interface CatalogPageProps {}

export const CatalogPage: React.FC<CatalogPageProps> = props => {
  const { t } = useTranslation();
  const productFilter = useMemo<IProductFilter>(() => {
    console.log("in");
    if (Math.random() > 1.6) {
      return {};
    }
    return { age_range: { max: 12, min: 12 } };
  }, []);
  console.log(productFilter);
  const {
    products,
    nextPage,
    haveNextPage,
    sortByPrice,
    sortedBy
  } = useProducts(productFilter);
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
                    <label key={ch.id} className="filter-link">
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
                <CatBanner to={"#!"} image={"/assets/uploads/images/ban.png"} />
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

                <PriceSorter sortByPrice={sortByPrice} sortedBy={sortedBy} />
              </div>
              <div className="d-flex flex-wrap justify-content-sm-start justify-content-center">
                {products.map(p => (
                  <Product key={p.id} product={p} wrapperClass="catalog-item" />
                ))}
              </div>
              {haveNextPage && (
                <div className="d-flex justify-content-center">
                  <button onClick={nextPage} className="more-btn">
                    {t("more")}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      ;
    </Layout>
  );
};
