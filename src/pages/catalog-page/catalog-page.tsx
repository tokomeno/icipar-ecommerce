import React, { useContext, useEffect, useRef, useState } from "react";
import { Product } from "../../components/product/product";
import { useProducts } from "../../hooks/useProducts/useProducts";
import { useTranslation } from "react-i18next";
import { PriceSorter } from "../../components/product-filters/price-sorter";
import { CatalogFilters } from "./catalog-filters";
import { PorductFilterContext } from "../../contexts/productFilterContext";
import { ProductContetnLoader } from "../../components/product/product-content-loader";
import { ActiveModalContext } from "../../contexts/modalContex";
import classnames from "classnames";
import { useLocation, useHistory } from "react-router-dom";
import { routes } from "../../routes/routes";
import { CatalogBrandSlider } from "../../components/catalog-brand-slider/catalog-brand-slider";
import queryString from "query-string";

interface CatalogPageProps {}

export const CatalogPage: React.FC<CatalogPageProps> = () => {
  const { t } = useTranslation();
  const { productFilterData, setFilterFromQueryString } = useContext(
    PorductFilterContext
  );
  const {
    products,
    nextPage,
    haveNextPage,
    isLoading,
    isLoadingNexPage,
  } = useProducts(productFilterData);

  useEffect(() => {
    if (window.location.search.length) setFilterFromQueryString();
  }, [setFilterFromQueryString]);

  const { activeModal, hideModal } = useContext(ActiveModalContext);

  // WHEN CLICKING CATALOG PAGE LINK FROM CATALOG PAGE WITH NEW QUERY STRING IN WINDOW
  // Need to reset filter from query string
  const { state, search } = useLocation();
  const { push } = useHistory();
  const firstMount = useRef(true);
  useEffect(() => {
    if (state && !firstMount.current) {
      setFilterFromQueryString();
      window.scrollTo(0, 0);
      push({
        state: undefined,
        pathname: routes.catalog,
        search: window.location.search,
      });
    }
    firstMount.current = false;
  }, [state, setFilterFromQueryString, push]);

  const [brandSliderId, setbrandSliderId] = useState<number | null>(null);
  useEffect(() => {
    const a = queryString.parse(search, {
      arrayFormat: "bracket",
      parseNumbers: true,
    });
    if (a.slider_brand_id && typeof a.slider_brand_id === "number") {
      setbrandSliderId(a.slider_brand_id);
    } else {
      setbrandSliderId(null);
    }
  }, [search]);

  if (!productFilterData) return <div></div>;
  return (
    <div className="container">
      <div className="catalog-page">
        <div className="d-flex">
          <div
            className={classnames("filter-block", {
              active: activeModal === "filter",
            })}
          >
            <button
              onClick={hideModal}
              className="burger-close d-block d-lg-none"
            >
              <img src="/assets/images/close.svg" alt="close" />
            </button>
            <CatalogFilters />
          </div>
          <div className="catalog">
            {brandSliderId && <CatalogBrandSlider brand_id={brandSliderId} />}
            <div className="catalog_top d-flex justify-content-between align-items-center flex-column flex-lg-row">
              <PriceSorter ordering={productFilterData.order || "price"} />
            </div>
            <div className="d-flex flex-wrap justify-content-sm-start justify-content-center">
              {/* {dummyProductData.map((p) => (
                <Product key={p.id} product={p} wrapperClass="catalog-item" />
              ))} */}
              {!isLoading && products.length === 0 && (
                <h2 className="h2 text-center">{t("products_not_found")}</h2>
              )}
              {!isLoading ? (
                products.map((p) => (
                  <Product
                    displayLables={true}
                    key={p.id}
                    product={p}
                    wrapperClass="catalog-item"
                  />
                ))
              ) : (
                <ProductContetnLoader items={30} />
              )}
              {isLoadingNexPage && <ProductContetnLoader items={15} />}
            </div>
            {haveNextPage && (
              <div className="d-flex justify-content-center">
                <button
                  onClick={() => {
                    if (!isLoading) {
                      nextPage();
                    }
                  }}
                  className="more-btn"
                >
                  {t("more")}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
