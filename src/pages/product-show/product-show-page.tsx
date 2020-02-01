import React from "react";
import { Layout } from "../../layout";
import { BundleProduct } from "../../components/bundle-product/bundle-product";
import { ProductSimpleSlider } from "../../components/sliders/product-simple-slider/product-simple-slider";
import { dummyProductData } from "../../data/product";
import { Reviews } from "../../components/reviews/reviews";
import { ProductContent } from "../../components/product-content/product-content";
import { useTranslation } from "react-i18next";
import { useProduct } from "../../hooks/useProduct";

export interface match<P> {
  params: P;
  isExact: boolean;
  path: string;
  url: string;
}

interface ProducShowPageProps {
  match: match<{ id: number }>;
}

export const ProducShowPage: React.FC<ProducShowPageProps> = ({ match }) => {
  const { t } = useTranslation();
  const { product } = useProduct(match.params.id);

  console.log(match.params.id);
  if (!product) return null;
  return (
    <Layout>
      <div className="product">
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
