import React from "react";
import { Layout } from "../../layout";
import { MainSlider } from "./mainSlider";
import { ProductSlider } from "../../components/sliders/producSlider/productSlider";
import { BlogSlider } from "../../components/sliders/blog-slider/blog-slider";
import { CommentSlider } from "../../components/comment-slider/comment-slider";
import { useTranslation } from "react-i18next";
import {
  FETCH_BESTSELLER_PRODUCTS,
  FETCH_NEWARRIVALS_PRODUCTS,
  FETCH_HOTDEALS_PRODUCTS,
  FETCH_DISCOUNTED_PRODUCTS
} from "../../api/endpoints";
import { BrandSlider } from "../../components/sliders/brandSlider/brandSlider";
import { SectionSliders } from "./section-sliders";

interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <MainSlider />

      <SectionSliders />

      <ProductSlider
        key={1}
        title={t("hotOffer")}
        showMoreNumber={123}
        classes={{ sectionClasses: ["hot__slide"] }}
        fetchUrl={FETCH_HOTDEALS_PRODUCTS}
        isHot={true}
      />
      <ProductSlider
        key={2}
        title={t("news")}
        showMoreNumber={123}
        classes={{ sectionClasses: ["news__slide"] }}
        fetchUrl={FETCH_NEWARRIVALS_PRODUCTS}
      />
      <ProductSlider
        key={3}
        classes={{ sectionClasses: ["saleslider"] }}
        title={t("sales")}
        showMoreNumber={123}
        fetchUrl={FETCH_DISCOUNTED_PRODUCTS}
      />
      <ProductSlider
        key={4}
        classes={{ sectionClasses: ["bestsellerslider"] }}
        title={t("bestsellers")}
        showMoreNumber={123}
        fetchUrl={FETCH_BESTSELLER_PRODUCTS}
      />
      {/* <ProductSlider
       key={5}
        classes={{ sectionClasses: ["recommendedslider"] }}
        title={t("recomendations")}
        menuCetegories={productCategories}
        showMoreNumber={123}
        products={dummyProductData}
      /> */}
      <BlogSlider />

      <BrandSlider />

      <CommentSlider />

      <div className="container" data-aos-r="fade-down">
        <div className="insta text-center">
          <img src="/assets/images/insta.svg" alt="instagram" />
          <div className="insta-block">
            <div className="bg d-block d-md-none" />
            <a href="#!" className="insta-block_btn">
              {t("folow_on_instargam")}
            </a>
          </div>
        </div>
      </div>
      <div className="stores" />
    </Layout>
  );
};
