import React from "react";
import { Layout } from "../../layout";
import { BundleProduct } from "../../components/bundle-product/bundle-product";
import { ProductSimpleSlider } from "../../components/sliders/product-simple-slider/product-simple-slider";
import { dummyProductData } from "../../data/product";
import { Reviews } from "../../components/reviews/reviews";
import { ProductContent } from "../../components/product-content/product-content";
import { useTranslation } from "react-i18next";

interface ProducShowPageProps {}

export const ProducShowPage: React.FC<ProducShowPageProps> = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="product">
        <div className="prod-content">
          <ProductContent />
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
