import React from "react";
import { Layout } from "../../layout";
import { BundleProduct } from "../../components/bundle-product/bundle-product";
import { ProductSimpleSlider } from "../../components/sliders/product-simple-slider/product-simple-slider";
import { dummyProductData } from "../../data/product";
import { Reviews } from "../../components/reviews/reviews";
import { ProductContent } from "../../components/product-content/product-content";

interface ProducShowPageProps {}

export const ProducShowPage: React.FC<ProducShowPageProps> = props => {
  return (
    <Layout>
      <div className="product">
        <div className="prod-content">
          <ProductContent />
          <BundleProduct />
          <ProductSimpleSlider
            title={"მსგავსი პროდუქტები"}
            products={dummyProductData}
          />
          <div className="line-sliders d-none d-sm-block" />
          <ProductSimpleSlider
            title={"რა იყიდეს სხვებმა"}
            products={dummyProductData}
          />
          <div className="line-sliders d-none d-sm-block" />
          <Reviews />
        </div>
      </div>
    </Layout>
  );
};
