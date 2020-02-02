import React from "react";
import { Layout } from "../../layout";
import { MainSlider } from "./mainSlider";
import { ProductSlider } from "../../components/sliders/producSlider/productSlider";
import { productCategories } from "../../data/categories";
import { dummyProductData } from "../../data/product";
import { BrandSlider } from "../../components/sliders/brandSlider/brandSlider";
import { brandsSlider } from "../../data/brands";
import { BlogSlider } from "../../components/sliders/blog-slider/blog-slider";
import { CommentSlider } from "../../components/comment-slider/comment-slider";
import { useTranslation } from "react-i18next";
import Swiper from "react-id-swiper";

interface HomePageProps {}

const sliderParams = {
  speed: 500,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
};

export const HomePage: React.FC<HomePageProps> = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <MainSlider />
      <div className="container d-none d-md-block">
        <div className="grid">
          <div className="row">
            <div
              className="col-md-3"
              data-aos-r="fade-right"
              data-aos-r-duration={1200}
            >
              <a href="#!" className="d-block">
                <Swiper
                  {...sliderParams}
                  wrapperClass="swiper-wrapper"
                  containerClass="swiper-container grid-item grid1-cont"
                >
                  <div className="swiper-slide">
                    <div className="grid1">
                      <div className="title">სიახლე</div>
                      <img
                        src="/assets/uploads/images/grid1.png"
                        alt="mexx"
                        className="bg-photo"
                      />
                      <div className="descr text-center">
                        <h4 className="prod-title">
                          1111 Calvin Klein All, 100ml
                        </h4>
                        <div className="price">
                          110
                          <sub>D</sub>
                        </div>
                      </div>
                    </div>
                  </div>
                </Swiper>
              </a>
            </div>
            <div className="col-md-9">
              <div className="row">
                <div
                  className="col-md-8"
                  data-aos-r-off="fade-up"
                  data-aos-r-duration={1200}
                >
                  <a href="#!" className="d-block">
                    <Swiper
                      {...sliderParams}
                      wrapperClass="swiper-wrapper"
                      containerClass="swiper-container grid-item row-item grid2-cont"
                    >
                      <div className="swiper-slide">
                        <div className="grid2">
                          <div className="title">ბანდლი</div>
                          <img
                            src="/assets/uploads/images/grid2.png"
                            alt="bundle"
                            className="bg-photo"
                          />
                          <div className="desc">
                            <h4 className="prod-title">
                              საგაზაფცულო კოსმეტიკის
                              <br />
                              ნაკრები
                            </h4>
                          </div>
                        </div>
                      </div>
                    </Swiper>
                  </a>
                </div>
                <div
                  className="col-md-4"
                  data-aos-r="fade-left"
                  data-aos-r-duration={1600}
                >
                  <a href="#!" className="grid3 grid-item row-item d-block">
                    <img
                      src="/assets/uploads/images/grid3.png"
                      alt="bundle"
                      className="bg-photo"
                    />
                    <div className="desc">
                      <h4 className="prod-title">
                        სუნამოს
                        <br />
                        შერჩევის ხელოვნება
                      </h4>
                      <div className="continue d-flex justify-content-between align-items-center">
                        გაგრძელება
                        <img
                          src="/assets/images/arrow-right_dark.svg"
                          alt="arrow"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="row last-row">
                <div
                  className="col-md-4"
                  data-aos-r-off="fade-up"
                  data-aos-r-duration={800}
                >
                  <a href="#!" className="grid4 grid-item row-item d-block">
                    <img
                      src="/assets/uploads/images/grid4.png"
                      alt="creme"
                      className="bg-photo"
                    />
                    <div className="desc">
                      <h4 className="prod-title">
                        ევროპის
                        <br />
                        ტრენდი
                      </h4>
                    </div>
                  </a>
                </div>
                <div
                  className="col-md-8"
                  data-aos-r="fade-left"
                  data-aos-r-duration={1200}
                >
                  <a href="#!" className="d-block grid5 grid-item row-item">
                    <img
                      src="/assets/uploads/images/grid5.png"
                      alt="grid"
                      className="bg-photo"
                    />
                    <div className="desc">
                      <h4 className="prod-title">
                        კოსმეტიკა მგძნობიარე
                        <br />
                        კანისათვის
                      </h4>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductSlider
        title={t("hotOffer")}
        menuCetegories={productCategories}
        showMoreNumber={123}
        products={dummyProductData}
        classes={{ sectionClasses: ["hot__slide"] }}
        isHot={true}
      />
      <ProductSlider
        title={t("news")}
        menuCetegories={productCategories}
        showMoreNumber={123}
        products={dummyProductData}
        classes={{ sectionClasses: ["news__slide"] }}
      />
      <ProductSlider
        classes={{ sectionClasses: ["saleslider"] }}
        title={t("sales")}
        menuCetegories={productCategories}
        showMoreNumber={123}
        products={dummyProductData}
      />
      <ProductSlider
        classes={{ sectionClasses: ["bestsellerslider"] }}
        title={t("bestsellers")}
        menuCetegories={productCategories}
        showMoreNumber={123}
        products={dummyProductData}
      />
      <ProductSlider
        classes={{ sectionClasses: ["recommendedslider"] }}
        title={t("recomendations")}
        menuCetegories={productCategories}
        showMoreNumber={123}
        products={dummyProductData}
      />
      <BlogSlider />
      <BrandSlider brands={brandsSlider} />

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
