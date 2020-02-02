import React from "react";
import Swiper from "react-id-swiper";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface MainSliderProps {}

const params = {
  speed: 800,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".main-slider-lg .swiper-pagination",
    clickable: true
  }
};
export const MainSlider: React.FC<MainSliderProps> = props => {
  return (
    <div className="main-slider">
      <div className="swiper-container main-slider-lg">
        <Swiper
          wrapperClass="swiper-wrapper"
          containerClass="swiper-container main-slider-lg"
          {...params}
        >
          <Item />
        </Swiper>
      </div>
    </div>
  );
};

const Item = () => {
  const { t } = useTranslation();
  return (
    <div className="swiper-slide d-flex align-items-center justify-content-center">
      <div className="container swiper-slide-content flex-sm-row flex-column">
        <img
          src="/assets/uploads/images/slide1.png"
          alt="chanel"
          className="main-photo d-none d-sm-block"
        />
        <img
          src="/assets/uploads/images/slide1-xs.png"
          alt="chanel"
          className="main-photo d-block d-sm-none"
        />
        <div className="desc text-center">
          <a href="#!" className="d-block">
            <h2 className="desc_title">
              <span>სუნამო ყველაზე</span>
              <span>მოდური ქალბატონებისთვის</span>
            </h2>
          </a>
          <Link to="#!" className="desc_link d-none d-md-inline-block">
            {t("shedena")}
            <img src="/assets/images/arrow-right.svg" alt="arrow" />
            <img
              src="/assets/images/arrow-right_red.svg"
              alt="arrow"
              className="red"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
