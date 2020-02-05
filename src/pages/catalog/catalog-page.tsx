import React, { useContext } from "react";
import { Layout } from "../../layout";
import { Product } from "../../components/product/product";
import { useProducts } from "../../hooks/useProducts/useProducts";
import { useTranslation } from "react-i18next";
import { PriceSorter } from "../../components/product-filters/price-sorter";
import { CatalogFilters } from "./catalog-filters";
import { PorductFilterContext } from "../../contexts/productFilterContext";
import { ProductContetnLoader } from "../../components/product/product-content-loader";

interface CatalogPageProps {}

export const CatalogPage: React.FC<CatalogPageProps> = () => {
  const { t } = useTranslation();
  const { productFilterData } = useContext(PorductFilterContext);
  const { products, nextPage, haveNextPage } = useProducts(productFilterData);

  if (!productFilterData) return <div></div>;
  return (
    <Layout>
      <div className="container">
        <div className="catalog-page">
          <div className="d-flex">
            <div className="filter-block">
              <button className="burger-close d-block d-lg-none">
                <img src="images/close.svg" alt="close" />
              </button>
              <CatalogFilters />
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

                <PriceSorter ordering={productFilterData.order || "price"} />
              </div>
              <div className="d-flex flex-wrap justify-content-sm-start justify-content-center">
                {products.length ? (
                  products.map(p => (
                    <Product
                      key={p.id}
                      product={p}
                      wrapperClass="catalog-item"
                    />
                  ))
                ) : (
                  <ProductContetnLoader items={15} />
                )}
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
