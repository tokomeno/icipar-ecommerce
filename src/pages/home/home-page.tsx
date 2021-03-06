import React, { useEffect, useContext } from "react";
import { MainSlider } from "./mainSlider";
import { ProductSlider } from "../../components/sliders/produc-slider/product-slider";
import { BlogSlider } from "../../components/sliders/blog-slider/blog-slider";
import { CommentSlider } from "../../components/comment-slider/comment-slider";
import { useTranslation } from "react-i18next";
import {
  FETCH_BESTSELLER_PRODUCTS,
  FETCH_NEWARRIVALS_PRODUCTS,
  FETCH_HOTDEALS_PRODUCTS,
  FETCH_DISCOUNTED_PRODUCTS,
} from "../../api/endpoints";
import { BrandSlider } from "../../components/sliders/brand-slider/brand-slider";
import { SectionSliders } from "./section-sliders";
import { InstagramHome } from "../../components/instagram-home";
import { useLocation } from "react-router-dom";
import { routes } from "../../routes/routes";
import { ActiveModalContext } from "../../contexts/modalContex";

interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = () => {
  const { t } = useTranslation();
  const { setActiveModal } = useContext(ActiveModalContext);
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === routes.registerRef) {
      setActiveModal("register-modal");
    }
  }, [setActiveModal, pathname]);

  return (
    <>
      <MainSlider />

      <SectionSliders />

      <ProductSlider
        title={t("hotOffer")}
        showMoreNumber={123}
        classes={{ sectionClasses: ["hot__slide"] }}
        fetchUrl={FETCH_HOTDEALS_PRODUCTS}
        isHot={true}
        sectionId={"hot__slide"}
      />
      <ProductSlider
        title={t("news")}
        showMoreNumber={123}
        classes={{ sectionClasses: ["news__slide"] }}
        fetchUrl={FETCH_NEWARRIVALS_PRODUCTS}
        sectionId={"news__slide"}
      />
      <ProductSlider
        showMoreLink={
          "/catalog?discount_range[]=0-0.25&discount_range[]=0.25-0.5&discount_range[]=0.5-0.75&discount_range[]=0.75-1"
        }
        classes={{ sectionClasses: ["saleslider"] }}
        title={t("sales")}
        showMoreNumber={123}
        fetchUrl={FETCH_DISCOUNTED_PRODUCTS}
        sectionId={"saleslider"}
      />
      <ProductSlider
        classes={{ sectionClasses: ["bestsellerslider"] }}
        title={t("bestsellers")}
        showMoreNumber={123}
        fetchUrl={FETCH_BESTSELLER_PRODUCTS}
        sectionId={"bestsellerslider"}
      />
      {/* <ProductSlider
        classes={{ sectionClasses: ["recommendedslider"] }}
        title={t("recomendations")}
        menuCetegories={productCategories}
        showMoreNumber={123}
        products={dummyProductData}
      /> */}

      <BlogSlider />

      <BrandSlider />

      <CommentSlider />

      <InstagramHome />
    </>
  );
};
