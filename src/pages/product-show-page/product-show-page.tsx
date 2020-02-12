import React, { useState, useEffect, useCallback } from "react";
import { Layout } from "../../layout";
import { BundleProduct } from "../../components/bundle-product/bundle-product";
import { ProductSimpleSlider } from "../../components/sliders/product-simple-slider/product-simple-slider";
import { dummyProductData, IProductWithItems } from "../../data/product";
import { Reviews } from "../../components/reviews/reviews";
import { ProductContent } from "../../components/product-content/product-content";
import { useTranslation } from "react-i18next";
import { useProduct } from "../../hooks/useProduct";
import { Item } from "./item";
import { match } from "react-router-dom";

interface ProducShowPageProps {
  match: match<{ id: string }>;
}

export const ProducShowPage: React.FC<ProducShowPageProps> = ({ match }) => {
  const { t } = useTranslation();
  const { product } = useProduct(match.params.id);

  const [activeItem, setActiveItem] = useState<
    IProductWithItems["items"][number] | null
  >(null);

  const setActiveItemFromId = useCallback(
    (id: number) => {
      const item = product?.items.find(i => i.id === id);
      if (item) setActiveItem(item);
    },
    [product]
  );

  useEffect(() => {
    if (!product) return;
    if (product.items.length) {
      setActiveItem(product.items[0]);
    }
  }, [setActiveItem, product]);

  if (!product || !activeItem)
    return (
      <Layout>
        <div style={{ height: "400px" }} className="product"></div>
      </Layout>
    );
  return (
    <Layout>
      <div className="product">
        <Item
          setActiveItemFromId={setActiveItemFromId}
          activeItem={activeItem}
          product={product}
        />
        <div className="prod-content">
          <ProductContent
            details={product["details"]}
            brand={product["brand"]}
          />
          <BundleProduct />
          <ProductSimpleSlider
            title={t("similar_products")}
            products={dummyProductData}
          />
          <div className="line-sliders d-none d-sm-block" />
          <ProductSimpleSlider
            title={t("what_others_bought")}
            products={dummyProductData}
          />
          <div className="line-sliders d-none d-sm-block" />
          <Reviews />
        </div>
      </div>
    </Layout>
  );
};
