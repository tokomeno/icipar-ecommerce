import React, { useEffect, useState } from "react";
import Swiper, { SwiperInstance } from "react-id-swiper";
// import chunk from "lodash.chunk";
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
    disableOnInteraction: false,
  },
  observer: true,
};
export const BrandSlider: React.FC<BrandSliderProps> = () => {
  const [swiper, setSwiper] = useState<null | SwiperInstance>(null);

  const goNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };
  const goPrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const { t } = useTranslation();
  const [brands, setBrands] = useState<IBrandSliderItem[]>([]);

  useEffect(() => {
    BrandService.getFeaturedBrands()
      .then((res) => {
        if (res.data.data) {
          setBrands(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="brands">
      <div className="container">
        <h3 className="brands-title text-center section-title">
          {t("our_brands")}
        </h3>
        <div className="slider">
          <Swiper
            getSwiper={(s) => setSwiper(s)}
            containerClass="brands-slider swiper-container"
            {...params}
          >
            {brands.map((b, i) => (
              <NavLink
                to={routes.brandShow(b.slug)}
                key={b.slug + i}
                className="swiper-slide"
              >
                <img key={b.slug} src={b.logo} alt="chanel" />
              </NavLink>
            ))}
          </Swiper>
          <div onClick={goPrev} className="swiper-button-next">
            <img src="/assets/images/next.svg" alt="next" />
          </div>
          <div onClick={goNext} className="swiper-button-prev">
            <img src="/assets/images/next.svg" alt="prev" />
          </div>
        </div>
      </div>
    </section>
  );
};
