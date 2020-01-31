import React, { useState, useCallback } from "react";
import { Layout } from "../../layout";
import { Product } from "../../components/product/product";
import { useProducts, ISortByPrice, ascOrDesc } from "../../hooks/useProducts";
import { useTranslation } from "react-i18next";
import { PriceSorter } from "../../components/product-filters/price-sorter";
import { CatalogFilters } from "./catalog-filters";
import { IChekedFilters } from "../../contexts/productFilterContext";
import queryString from "query-string";

interface CatalogPageProps {}

export type FOnFilterChange = (
  ids: (number | string)[],
  filterName: keyof IChekedFilters
) => void;

export type IProductFilterObject = Partial<IChekedFilters> & {
  order?: "price" | "-price";
};

export const CatalogPage: React.FC<CatalogPageProps> = () => {
  const { t } = useTranslation();

  const [productFilter, setProductFilter] = useState<IProductFilterObject>(
    () => {
      return queryString.parse(window.location.search);
    }
  );

  const sortByPrice: ISortByPrice = asc_or_desc => {
    setProductFilter(prevState => ({
      ...prevState,
      order: ascOrDesc.asc === asc_or_desc ? "price" : "-price"
    }));
  };

  const handleFilterChange: FOnFilterChange = useCallback((ids, filterName) => {
    setProductFilter(prevState => ({ ...prevState, [filterName]: ids }));
  }, []);

  const { products, nextPage, haveNextPage } = useProducts(productFilter);
  return (
    <Layout>
      <div className="container">
        <div className="catalog-page">
          <div className="d-flex">
            <div className="filter-block">
              <button className="burger-close d-block d-lg-none">
                <img src="images/close.svg" alt="close" />
              </button>
              <CatalogFilters onFilterChange={handleFilterChange} />
            </div>
            <div className="catalog">
              <div className="catalog_top d-flex justify-content-between align-items-center flex-column flex-lg-row">
                <div className="cat-menu d-flex">
                  {/* <a href="#!" className="cat-menu_item">
                    მთავარი
                  </a>
                  <div className="right"> &gt; </div>
                  <a href="#!" className="cat-menu_item">
                    სუნამოები
                  </a>
                  <div className="right"> &gt; </div>
                  <span className="cat-menu_item">ქალი</span> */}
                </div>

                <PriceSorter
                  sortByPrice={sortByPrice}
                  ordering={productFilter.order || "price"}
                />
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
    </Layout>
  );
};
