import React from "react";
import Swiper from "react-id-swiper";
// import chunk from "lodash.chunk";
import { useSliderNav } from "../../../hooks/common/useSliderNav";
import { IBrandSliderItem } from "../../../data/brands";

interface BrandSliderProps {
  brands: IBrandSliderItem[];
}

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
  }
};
export const BrandSlider: React.FC<BrandSliderProps> = ({ brands }) => {
  const { sliderNav, currentSliderIndex } = useSliderNav(BrandSlider.length, 0);
  return (
    <section className="brands">
      <div className="container">
        <h3 className="brands-title text-center section-title">
          ჩვენი ბრენდები
        </h3>
        <div className="slider">
          <Swiper
            activeSlideKey={currentSliderIndex.toString()}
            containerClass="brands-slider swiper-container"
            {...params}
          >
            {brands.map(b => (
              <a href="#!" key={b.id} className="swiper-slide">
                <img key={b.id} src={b.image} alt="chanel" />
              </a>
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
