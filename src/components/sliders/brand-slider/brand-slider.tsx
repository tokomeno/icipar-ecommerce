import React, { useEffect, useState } from "react";
import Swiper from "react-id-swiper";
// import chunk from "lodash.chunk";
import { useSliderNav } from "../../../hooks/common/useSliderNav";
import { useTranslation } from "react-i18next";
import { IBrandSliderItem, BrandService } from "../../../services/brand.http";
import { routes } from "../../../routes/routes";
import { NavLink } from "react-router-dom";

interface BrandSliderProps {}

const params = {
  slidesPerView: 6,
  speed: 800,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".brand-slider .swiper-pagination",
    clickable: true
  },
  observer: true
};
export const BrandSlider: React.FC<BrandSliderProps> = () => {
  const { t } = useTranslation();
  const [brands, setBrands] = useState<IBrandSliderItem[]>([]);

  useEffect(() => {
    BrandService.getFeaturedBrands()
      .then(res => {
        if (res.data.data) {
          setBrands(res.data.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  // brands = brandsSlider;

  const { sliderNav, currentSliderIndex } = useSliderNav(BrandSlider.length, 0);
  return (
    <section className="brands">
      <div className="container">
        <h3 className="brands-title text-center section-title">
          {t("our_brands")}
        </h3>
        <div className="slider">
          <Swiper
            activeSlideKey={currentSliderIndex.toString()}
            containerClass="brands-slider swiper-container"
            {...params}
          >
            {brands.map(b => (
              <NavLink
                to={routes.brandShow(b.slug)}
                key={b.slug}
                className="swiper-slide"
              >
                <img key={b.slug} src={b.logo} alt="chanel" />
              </NavLink>
            ))}
          </Swiper>
          <div
            onClick={() => sliderNav("forward")}
            className="swiper-button-next"
          >
            <img src="/assets/images/next.svg" alt="next" />
          </div>
          <div
            onClick={() => sliderNav("backward")}
            className="swiper-button-prev"
          >
            <img src="/assets/images/next.svg" alt="prev" />
          </div>
        </div>
      </div>
    </section>
  );
};
