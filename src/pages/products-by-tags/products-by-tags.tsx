import React, { useEffect, useState, useCallback } from "react";
import { Product } from "../../components/product/product";

import { useTranslation } from "react-i18next";

import { ProductContetnLoader } from "../../components/product/product-content-loader";

import queryString from "query-string";
import { IProduct, ProductService } from "../../services/product.http";
import { useLoader } from "../../hooks/common/useLoader";

interface ProductsByTagPageProps {}

export const ProductsByTagPage: React.FC<ProductsByTagPageProps> = () => {
  const { t } = useTranslation();

  const { isLoading, stopLoading } = useLoader(true);
  const {
    isLoading: isLoadingNextPage,
    startLoading: startLoadingNextPage,
    stopLoading: stopLoadingNextPage,
  } = useLoader(false);

  const [products, setProducts] = useState<IProduct[]>([]);
  const [nextLink, setNextLink] = useState<string | null>(null);

  const nextPage = useCallback(() => {
    if (!nextLink) return;
    startLoadingNextPage();
    const a = queryString.parse(window.location.search, {
      arrayFormat: "bracket",
    });
    console.log(nextLink, a.tag);
    ProductService.getProductsByTag("tag", nextLink + "&tag=" + a.tag).then(
      (res) => {
        setProducts((prev) => [...prev, ...res.data.data]);
        setNextLink(res.data.links.next);
        stopLoadingNextPage();
      }
    );
  }, [
    nextLink,
    setProducts,
    setNextLink,
    stopLoadingNextPage,
    startLoadingNextPage,
  ]);

  useEffect(() => {
    const a = queryString.parse(window.location.search, {
      arrayFormat: "bracket",
    });
    if (a.tag && typeof a.tag === "string") {
      ProductService.getProductsByTag(a.tag).then((res) => {
        setProducts(res.data.data);
        setNextLink(res.data.links.next);
        stopLoading();
      });
    }
  }, [setProducts, setNextLink, stopLoading]);

  return (
    <div className="container">
      <div className="catalog-page">
        <div className="d-flex">
          <div className="filter-block" />
          <div className="catalog">
            <div className="d-flex flex-wrap justify-content-sm-start justify-content-center">
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
              {isLoadingNextPage && <ProductContetnLoader items={15} />}
            </div>
            {nextLink && (
              <div className="d-flex justify-content-center">
                <button
                  onClick={() => {
                    if (!isLoading && !isLoadingNextPage) {
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
