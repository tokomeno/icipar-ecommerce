import React, { useState } from "react";
import { Product } from "../../product/product";
import { SwiperCustomNavBtn } from "../../swiper/swiper-custom-nav-btn";
import Swiper, { SwiperInstance } from "react-id-swiper";
import { IProduct } from "../../../services/product.http";

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
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    767: {
      slidesPerView: 2,
    },
    575: {
      slidesPerView: 1.5,
    },
    400: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
  },
};

export const ProductSimpleSlider: React.FC<ProductSimpleSliderProps> = ({
  title,
  products,
}) => {
  const [swiper, setSwiper] = useState<null | SwiperInstance>(null);

  return (
    <div className="like-prod likes-slider">
      <h3 className="title text-center">{title}</h3>
      <div className="like-prod_content">
        <div className="container">
          <Swiper
            containerClass={"like-container swiper-container"}
            getSwiper={(s) => setSwiper(s)}
            {...params}
          >
            {products.map((p) => (
              <Product key={p.id} wrapperClass={"swiper-slide"} product={p} />
            ))}
          </Swiper>
        </div>
        <SwiperCustomNavBtn swiper={swiper} />
      </div>
    </div>
  );
};
