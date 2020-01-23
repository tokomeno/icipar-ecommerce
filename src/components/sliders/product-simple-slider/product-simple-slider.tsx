import React from "react";
import { Product } from "../../product/product";
import { dummyProductData, IProduct } from "../../../data/product";
import { SwiperCustomNavBtn } from "../../swiper/swiper-custom-nav-btn";
import { useSliderNav } from "../../../hooks/common/useSliderNav";
import Swiper from "react-id-swiper";

interface ProductSimpleSliderProps {
  title: string;
  products: IProduct[];
}

const params = {
  slidesPerView: 5,
  spaceBetween: 60,
  renderPrevButton: () => null,
  renderNextButton: () => null,
  breakpoints: {
    1799: {
      spaceBetween: 30
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 40
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 50
    },
    767: {
      slidesPerView: 2
    },
    575: {
      slidesPerView: 1.5
    },
    400: {
      slidesPerView: 1.5,
      spaceBetween: 20
    }
  }
  // pagination: {
  //   el: ".likes-slider .swiper-pagination",
  //   clickable: true
  // }
};

export const ProductSimpleSlider: React.FC<ProductSimpleSliderProps> = ({
  title,
  products
}) => {
  const { sliderNav, currentSliderIndex } = useSliderNav(products.length, 0);
  return (
    <div className="like-prod likes-slider">
      <h3 className="title text-center">{title}</h3>
      <div className="like-prod_content">
        <div className="container">
          <Swiper
            containerClass={"like-container swiper-container"}
            activeSlideKey={currentSliderIndex.toString()}
            {...params}
          >
            {products.map(p => (
              <Product key={p.id} wrapperClass={"swiper-slide"} product={p} />
            ))}
          </Swiper>
        </div>
        <SwiperCustomNavBtn sliderNav={sliderNav} />
      </div>
    </div>
  );
};
